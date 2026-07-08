import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaTelegramPlane, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function Contact() {
  // Removed TypeScript type from useRef
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('idle');

  // Initialization
  useEffect(() => {
    emailjs.init("re8UOJpBf_mKVPA23"); 
  }, []);

  // Removed TypeScript type from e
  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    setStatus('idle');

    emailjs.sendForm(
      'service_uk7hzdl', 
      'template_0fnzi45', 
      form.current, 
      're8UOJpBf_mKVPA23'
    )
    .then((result) => {
        console.log("SUCCESS!", result.text);
        setStatus('success');
        setIsSending(false);
        form.current.reset(); // Fixed optional chaining for standard JS
        
        setTimeout(() => setStatus('idle'), 5000);
    }, (error) => {
        console.error("FAILED...", error);
        setStatus('error');
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#030712] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h4 className="text-indigo-400 font-mono tracking-widest mb-2 uppercase">// Contact</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let's Build Something <span className="text-yellow-400">Great</span></h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4 text-center lg:text-left">Connect with me</h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:mikyasnegash2@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition-colors">
                  <FaEnvelope className="text-indigo-500" /> mikyasnegash2@gmail.com
                </a>
                <div className="flex justify-center lg:justify-start gap-4 pt-4">
                  <a href="https://t.me/Mikyyetklyelij" target="_blank" rel="noreferrer" className="bg-[#0088CC] p-4 rounded-xl text-white hover:scale-110 transition-transform"><FaTelegramPlane /></a>
                  <a href=" https://www.linkedin.com/in/mikiyas-negash-01b400263" className="bg-[#0A66C2] p-4 rounded-xl text-white hover:scale-110 transition-transform"><FaLinkedinIn /></a>
                  <a href="https://wa.me/251902464535" className="bg-[#25D366] p-4 rounded-xl text-white hover:scale-110 transition-transform"><FaWhatsapp /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" name="from_name" placeholder="Your Name" required
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-indigo-500 outline-none transition-all"
                />
                <input 
                  type="email" name="from_email" placeholder="Your Email" required
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-indigo-500 outline-none transition-all"
                />
              </div>
              <textarea 
                name="message" placeholder="How can I help you?" rows={6} required
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-indigo-500 outline-none transition-all resize-none"
              />
              
              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg 
                  ${status === 'success' ? 'bg-green-500 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white'}
                  ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSending ? (
                  <span className="animate-pulse">Sending...</span>
                ) : status === 'success' ? (
                  <><FiCheckCircle /> Message Sent Successfully!</>
                ) : status === 'error' ? (
                  <><FiAlertCircle /> Failed to Send. Try Again?</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>

              {/* Status Feedback Messages */}
              {status === 'success' && (
                <p className="text-green-400 text-sm text-center font-medium animate-bounce">
                  Success! Your message is in my inbox.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center font-medium">
                  Something went wrong. Please check your internet or try later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}