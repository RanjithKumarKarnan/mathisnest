import { useState, useEffect } from 'react'
import { X, User, Phone, Home, MessageSquare, Send, AlertCircle } from 'lucide-react'

interface EnquiryFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export function EnquiryForm({ isOpen, onClose }: EnquiryFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        roomType: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [errors, setErrors] = useState<{
        name?: string;
        phone?: string;
        roomType?: string;
        general?: string;
    }>({})

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            setErrors({})
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose(e)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onClose])

    const handleClose = (e?: React.SyntheticEvent | KeyboardEvent) => {
        if (e) {
            e.preventDefault()
            e.stopPropagation()
        }
        onClose()
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors: typeof errors = {}

        if (formData.name.trim().length < 2) {
            newErrors.name = 'Please enter your full name.'
        }

        const cleanPhone = formData.phone.replace(/[\s-]/g, '')
        if (!/^[0-9]{10}$/.test(cleanPhone)) {
            newErrors.phone = 'Please enter a valid 10-digit phone number.'
        }

        if (!formData.roomType) {
            newErrors.roomType = 'Please select a room preference.'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)
        setErrors({})

        try {
            const response = await fetch('/send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    roomType: formData.roomType,
                    message: formData.message
                })
            })

            const result = await response.json()

            if (result.status === 'success') {
                setIsSubmitted(true)

                setTimeout(() => {
                    handleClose()
                    setTimeout(() => {
                        setIsSubmitted(false)
                        setFormData({ name: '', phone: '', roomType: '', message: '' })
                    }, 500)
                }, 3000)
            } else {
                setErrors({ general: result.message || 'Server error. Please try calling us instead.' })
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            setErrors({ general: 'Failed to connect to the server. Please check your internet or call us.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter') {
            if ((e.target as HTMLElement).tagName.toLowerCase() === 'textarea') {
                return;
            }
            e.preventDefault();
            handleSubmit(e as unknown as React.FormEvent);
        }
    }

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 sm:p-6 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            aria-labelledby="enquiry-modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={handleClose}
                aria-hidden="true"
            />

            <div
                className={`relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-surface shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-border/50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-h-[95vh] sm:max-h-[90vh] ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-48 w-full bg-primary/20 blur-[60px]" aria-hidden="true" />

                <button
                    type="button"
                    onClick={handleClose}
                    className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-text ring-1 ring-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary active:scale-95 sm:right-6 sm:top-6"
                    aria-label="Close form"
                >
                    <X className="h-5 w-5" strokeWidth={1.5} />
                </button>

                <div className="relative z-10 overflow-y-auto p-6 sm:p-8 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border/60 hover:[&::-webkit-scrollbar-thumb]:bg-border">
                    <div className="mb-6 pr-8">
                        <h2 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                            Enquire Now
                        </h2>
                        <h3 id="enquiry-modal-title" className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
                            Reserve your stay.
                        </h3>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-text-muted">
                            Leave your details below and our team will get back to you shortly to confirm your visit.
                        </p>
                    </div>

                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500 ring-1 ring-green-500/20">
                                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="font-display text-2xl font-bold text-text">Thank You!</h4>
                            <p className="mt-2 text-sm text-text-muted">Your enquiry has been received. We will call you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown} className="space-y-4 animate-in fade-in duration-500" noValidate>

                            <div>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                        <User className={`h-4 w-4 transition-colors duration-300 ${errors.name ? 'text-red-500' : 'text-text-muted'}`} strokeWidth={1.5} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className={`w-full rounded-xl border py-3 pl-11 pr-4 text-sm font-medium text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-1 transition-all duration-300 ${errors.name
                                            ? 'border-red-500 bg-red-500/5 focus:border-red-500 focus:ring-red-500'
                                            : 'border-border/50 bg-background/50 focus:border-primary focus:bg-background focus:ring-primary'
                                            }`}
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                    />
                                </div>
                                {errors.name && (
                                    <p className="mt-1.5 pl-4 text-xs font-medium text-red-500 animate-in fade-in slide-in-from-top-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                        <Phone className={`h-4 w-4 transition-colors duration-300 ${errors.phone ? 'text-red-500' : 'text-text-muted'}`} strokeWidth={1.5} />
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="10-Digit Phone Number"
                                        className={`w-full rounded-xl border py-3 pl-11 pr-4 text-sm font-medium text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-1 transition-all duration-300 ${errors.phone
                                            ? 'border-red-500 bg-red-500/5 focus:border-red-500 focus:ring-red-500'
                                            : 'border-border/50 bg-background/50 focus:border-primary focus:bg-background focus:ring-primary'
                                            }`}
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value.replace(/[^0-9\s-]/g, ''))}
                                    />
                                </div>
                                {errors.phone && (
                                    <p className="mt-1.5 pl-4 text-xs font-medium text-red-500 animate-in fade-in slide-in-from-top-1">{errors.phone}</p>
                                )}
                            </div>

                            <div>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                        <Home className={`h-4 w-4 transition-colors duration-300 ${errors.roomType ? 'text-red-500' : 'text-text-muted'}`} strokeWidth={1.5} />
                                    </div>
                                    <select
                                        className={`w-full appearance-none rounded-xl border py-3 pl-11 pr-4 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-1 ${errors.roomType
                                            ? 'border-red-500 bg-red-500/5 text-text focus:border-red-500 focus:ring-red-500'
                                            : `border-border/50 focus:border-primary focus:bg-background focus:ring-primary ${formData.roomType ? 'text-text bg-background/50' : 'text-text-muted/60 bg-background/50'}`
                                            }`}
                                        value={formData.roomType}
                                        onChange={(e) => handleInputChange('roomType', e.target.value)}
                                    >
                                        <option value="" disabled hidden>Select Room Preference</option>
                                        <option value="double" className="text-text">Double Sharing Room</option>
                                        <option value="four" className="text-text">Four Sharing Room</option>
                                        <option value="not_sure" className="text-text">Not Sure Yet</option>
                                    </select>
                                </div>
                                {errors.roomType && (
                                    <p className="mt-1.5 pl-4 text-xs font-medium text-red-500 animate-in fade-in slide-in-from-top-1">{errors.roomType}</p>
                                )}
                            </div>

                            <div className="relative">
                                <div className="pointer-events-none absolute left-0 top-3 flex items-center pl-4">
                                    <MessageSquare className="h-4 w-4 text-text-muted" strokeWidth={1.5} />
                                </div>
                                <textarea
                                    placeholder="Any questions or expected move-in date?"
                                    rows={2}
                                    className="w-full resize-none rounded-xl border border-border/50 bg-background/50 py-3 pl-11 pr-4 text-sm font-medium text-text placeholder:text-text-muted/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                />
                            </div>

                            {errors.general && (
                                <div className="flex items-start gap-2 rounded-xl bg-red-500/10 p-3 text-red-500 ring-1 ring-red-500/20 animate-in fade-in">
                                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                                    <p className="text-xs font-medium leading-relaxed">{errors.general}</p>
                                </div>
                            )}

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {isSubmitting ? 'Sending Request...' : 'Submit Enquiry'}
                                        {!isSubmitting && <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2} />}
                                    </span>
                                </button>
                            </div>

                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}