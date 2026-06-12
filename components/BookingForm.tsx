"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";

const services = [
  { group: "🔢 Numerology", options: [
    { label: "Mini Consultation Call — ₹599", value: "Mini Consultation Call" },
    { label: "Detailed Numerology Session — ₹1,099", value: "Detailed Numerology Session" },
  ]},
  { group: "🏡 Vastu Shastra", options: [
    { label: "Vastu Guidance Session (Online) — ₹4,999", value: "Vastu Guidance Session" },
    { label: "Old Home Vastu — ₹12,999", value: "Old Home Vastu" },
    { label: "New Home Vastu Shastra — ₹20,999", value: "New Home Vastu Shastra" },
    { label: "Commercial Vastu (Hotel/Hospital/Shop etc.) — ₹49,999", value: "Commercial Vastu" },
  ]},
];

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({ name: "", mobile: "", city: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) setForm((prev) => ({ ...prev, service: serviceParam }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    // Open WhatsApp immediately
    const waText = encodeURIComponent(
      `Hello Monika! 🙏 I'd like to book a consultation.\n\n` +
      `*Name:* ${form.name}\n` +
      `*Mobile:* ${form.mobile}\n` +
      `*City:* ${form.city}\n` +
      `*Service:* ${form.service}\n` +
      (form.message ? `*Message:* ${form.message}` : "")
    );
    window.open(`https://wa.me/917027510541?text=${waText}`, "_blank");

    // Send email automatically in the background
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          name: form.name,
          mobile: form.mobile,
          city: form.city,
          service: form.service,
          message: form.message || "No message provided",
          reply_to: "",
          email: "",
        },
        { publicKey }
      );
      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err);
      setSubmitted(true);
      setError(`Email error: ${msg}`);
    } finally {
      setSending(false);
    }
  };

  const isValid = form.name && form.mobile && form.city && form.service;

  if (submitted) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "clamp(32px, 6vw, 48px) clamp(20px, 5vw, 24px)",
          background: "linear-gradient(135deg, #DBEAFE, #BFDBFE)",
          border: "1px solid rgba(37, 211, 102, 0.3)",
          borderRadius: "20px",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
        <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.4rem, 4vw, 1.8rem)", fontWeight: 700, color: "#1A3A5C", marginBottom: "12px" }}>
          Request Sent!
        </h3>
        <p style={{ color: "#4B7BA8", marginBottom: "8px", lineHeight: 1.7, fontSize: "clamp(0.88rem, 2vw, 1rem)" }}>
          Your booking details have been sent to Monika via WhatsApp and email.
        </p>
        <p style={{ color: "#4B7BA8", marginBottom: "24px", fontSize: "clamp(0.82rem, 2vw, 0.9rem)" }}>
          She will reach out to schedule your session shortly.
        </p>
        {error && (
          <p style={{ color: "#FF8A65", fontSize: "0.82rem", marginBottom: "16px" }}>{error}</p>
        )}
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button onClick={() => { setSubmitted(false); setError(""); }} className="btn-gold">
            Book Another Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: "clamp(14px, 3vw, 20px)",
          marginBottom: "clamp(14px, 3vw, 20px)",
        }}
      >
        {[
          { id: "name", label: "Full Name *", type: "text", placeholder: "Enter your full name" },
          { id: "mobile", label: "Mobile Number *", type: "tel", placeholder: "+91 XXXXX XXXXX" },
          { id: "city", label: "City / Place *", type: "text", placeholder: "Your city" },
        ].map(({ id, label, type, placeholder }) => (
          <div key={id}>
            <label htmlFor={id} style={{ display: "block", color: "#1565C0", fontSize: "clamp(0.78rem, 2vw, 0.85rem)", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.5px" }}>
              {label}
            </label>
            <input
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              value={form[id as keyof typeof form]}
              onChange={handleChange}
              required
              className="mystic-input"
            />
          </div>
        ))}

        <div>
          <label htmlFor="service" style={{ display: "block", color: "#1565C0", fontSize: "clamp(0.78rem, 2vw, 0.85rem)", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.5px" }}>
            Service Type *
          </label>
          <select id="service" name="service" value={form.service} onChange={handleChange} required className="mystic-input">
            <option value="">Select a service</option>
            {services.map((group) => (
              <optgroup key={group.group} label={group.group}>
                {group.options.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginBottom: "clamp(20px, 4vw, 28px)" }}>
        <label htmlFor="message" style={{ display: "block", color: "#1565C0", fontSize: "clamp(0.78rem, 2vw, 0.85rem)", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.5px" }}>
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Share anything specific you'd like guidance on..."
          value={form.message}
          onChange={handleChange}
          className="mystic-input"
          style={{ resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={!isValid || sending}
        className="btn-gold"
        style={{
          opacity: isValid && !sending ? 1 : 0.5,
          cursor: isValid && !sending ? "pointer" : "not-allowed",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {sending ? "Sending..." : "💬 Book via WhatsApp"}
      </button>

      <p style={{ color: "#5B8DB8", fontSize: "0.8rem", marginTop: "14px", textAlign: "center" }}>
        Your details are sent to Monika via WhatsApp + email automatically.
      </p>
    </form>
  );
}
