<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit;
}

$json_data = file_get_contents("php://input");
$data = json_decode($json_data);

$name = isset($data->name) ? htmlspecialchars(strip_tags(trim($data->name))) : '';
$phone = isset($data->phone) ? htmlspecialchars(strip_tags(trim($data->phone))) : '';
$roomType = isset($data->roomType) ? htmlspecialchars(strip_tags(trim($data->roomType))) : '';
$message = isset($data->message) ? htmlspecialchars(strip_tags(trim($data->message))) : '';

if (empty($name) || empty($phone) || empty($roomType)) {
    echo json_encode(["status" => "error", "message" => "Name, Phone, and Room Preference are required."]);
    exit;
}

$clean_phone = preg_replace('/[^0-9]/', '', $phone);
if (strlen($clean_phone) < 10) {
    echo json_encode(["status" => "error", "message" => "Invalid phone number."]);
    exit;
}

$to = "ranjithram878@gmail.com";
$subject = "New Hostel Enquiry: $name";

$from_email = "noreply@mathisnestladieshostel.in";

$roomTypeFormatted = "Not Sure Yet";
if ($roomType === "double") $roomTypeFormatted = "Double Sharing Room";
if ($roomType === "four") $roomTypeFormatted = "Four Sharing Room";

$body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>New Hostel Enquiry</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F9F8F6; margin: 0; padding: 40px 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 12px; border-top: 5px solid #E8620E; box-shadow: 0 10px 25px rgba(10,25,47,0.05); }
        h2 { color: #0A192F; margin-top: 0; font-size: 24px; font-weight: 700; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px; margin-bottom: 30px; }
        .field { margin-bottom: 24px; }
        .label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; display: block; }
        .value { font-size: 16px; color: #0A192F; background-color: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; line-height: 1.6; white-space: pre-wrap; }
        .footer { margin-top: 40px; font-size: 12px; color: #94a3b8; text-align: center; line-height: 1.5; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>Mathi's Nest - New Enquiry</h2>
        
        <div class='field'>
            <span class='label'>Guest Name</span>
            <div class='value'>$name</div>
        </div>
        
        <div class='field'>
            <span class='label'>Phone Number</span>
            <div class='value'>$phone</div>
        </div>

        <div class='field'>
            <span class='label'>Room Preference</span>
            <div class='value'>$roomTypeFormatted</div>
        </div>
        
        <div class='field'>
            <span class='label'>Message / Move-in Date</span>
            <div class='value'>" . ($message ? $message : "No additional message provided.") . "</div>
        </div>
    </div>
    <div class='footer'>
        This is an automated notification from the Mathi's Nest website form.<br>
        <strong>Please call the phone number provided to reach the guest.</strong>
    </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Mathi's Nest Website <$from_email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send message via server. Please call us instead."]);
}
