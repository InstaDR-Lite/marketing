'use client';

import { Calendar, ShieldCheck, CreditCard, Video, CheckCircle } from 'lucide-react';

export default function ClinicBento() {
  return (
    <section className="flex justify-center py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
             style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-full
                          text-sm font-mono mb-4"
               style={{
                 background:   'var(--color-teal-dim)',
                 borderColor:  'var(--color-border-2)',
                 color:        'var(--color-teal)',
               }}>
            // the clinic experience
          </div>
          <h2 className="text-[2rem] lg:text-[3.2rem] font-bold mb-4 tracking-tight"
              style={{ color: 'var(--color-text-primary)'}}>
            From booking to billing.
          </h2>
          <p className="text-lg max-w-2xl mx-auto"
             style={{ color: 'var(--color-text-secondary)'}}>
            Every step of the patient journey is connected. No manual handoffs, no disconnected tools, no missed steps.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">

          {/* Step 1 — Patient books (wide) */}
          <div className="md:col-span-2 rounded-none border p-6 lg:p-8 overflow-hidden relative
                          transition-all duration-300 hover:shadow-lg"
               style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-mono tracking-widest mb-2"
                     style={{ color: 'var(--color-text-muted)' }}>01</div>
                <h3 className="text-xl font-bold mb-2"
                    style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>
                  Patient books via clinic calendar
                </h3>
                <p className="text-sm leading-relaxed max-w-xs"
                   style={{ color: 'var(--color-text-secondary)' }}>
                  Patients self-schedule from your clinic&apos;s public booking page — real-time availability, automatic confirmations, no phone tag.
                </p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border"
                   style={{ background: 'var(--color-teal-dim)', borderColor: 'var(--color-border)' }}>
                <Calendar size={18} style={{ color: 'var(--color-teal)' }} />
              </div>
            </div>

            {/* Mini booking UI */}
            <div className="border p-4" style={{ background: 'var(--color-surface-2)', borderColor: 'var(--color-border)' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-[14px] font-mono font-bold"
                     style={{ color: 'var(--color-text-primary)' }}>Book an Appointment</div>
                <div className="text-[13px] font-mono"
                     style={{ color: 'var(--color-text)' }}>Riverside Clinic</div>
              </div>
              <div className="grid grid-cols-7 gap-0.5 mb-3">
                {['S','M','T','W','T','F','S'].map((d, i) => (
                  <div key={i} className="text-center text-[9px] font-mono py-0.5"
                       style={{ color: 'var(--color-text-muted)' }}>{d}</div>
                ))}
                {[null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((d, i) => (
                  <div key={i} className="text-center text-[10px] py-1 font-mono cursor-pointer transition-colors"
                       style={{
                         background: d === 14 ? 'var(--color-teal)' : 'transparent',
                         color:      d === 14 ? '#2e1f05' : d ? 'var(--color-text-primary)' : 'transparent',
                         fontWeight: d === 14 ? 700 : 400,
                       }}>
                    {d}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['9:00 AM','9:30 AM','10:00 AM','10:30 AM'].map((t, i) => (
                  <div key={t} className="text-[12px] font-mono px-2.5 py-1 border cursor-pointer"
                       style={{
                         background:  i === 1 ? 'var(--color-teal)' : 'var(--color-surface)',
                         borderColor: i === 1 ? 'var(--color-teal)' : 'var(--color-border)',
                         color:       i === 1 ? '#362304' : 'var(--color-text-primary)',
                         fontWeight:  i === 1 ? 600 : 400,
                       }}>
                    {t}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-7 border flex items-center px-2.5"
                     style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                  <span className="text-[12px] font-mono" style={{ color: 'var(--color-text-muted)' }}>
                    Sarah Chen
                  </span>
                </div>
                <button className="flex items-center gap-1 text-[12px] font-mono font-bold px-3 py-1.5"
                        style={{ background: '#007a40', color: '#F5F0E8' }}>
                  Confirm
                  <CheckCircle size={10} />
                </button>
              </div>
            </div>
          </div>

          {/* Step 2 — Provider sees it */}
          <div className="rounded-none p-6 overflow-hidden relative transition-all duration-300 hover:shadow-lg"
            style={{ background: '#007a40', color: '#F5F0E8' }}
          >
            <div className="text-xs font-mono tracking-widest mb-2" style={{ color: 'rgba(245,240,232,0.6)' }}>02</div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Provider sees it in dashboard
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,240,232,0.8)' }}>
              New appointments surface in the provider&apos;s queue the moment &apos;re booked. No manual sync, no refresh needed.
            </p>
            <div className="space-y-2">
              <div className="p-3 border" style={{ background: 'rgba(245,240,232,0.1)', borderColor: 'rgba(245,240,232,0.2)' }}>
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                       style={{ background: 'rgba(245,240,232,0.2)', color: '#F5F0E8' }}>CM</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono font-bold">New appointment booked</div>
                    <div className="text-[9px] font-mono mt-0.5" style={{ color: 'rgba(245,240,232,0.7)' }}>
                      Sarah Chen · Today, 9:30 AM
                    </div>
                    <div className="text-[9px] font-mono" style={{ color: 'rgba(245,240,232,0.7)' }}>
                      Anxiety — Initial Consultation
                    </div>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 animate-pulse"
                       style={{ background: '#22C55E' }} />
                </div>
              </div>
              <div className="p-3 border" style={{ background: 'rgba(245,240,232,0.1)', borderColor: 'rgba(245,240,232,0.2)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0"
                       style={{ background: 'rgba(245,240,232,0.2)' }}>
                    <Calendar size={11} style={{ color: '#F5F0E8' }} />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono" style={{ color: 'rgba(245,240,232,0.7)' }}>Schedule updated</div>
                    <div className="text-[10px] font-mono font-bold">4 appointments today</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-1 pt-1">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#22C55E' }} />
                <div className="text-[9px] font-mono" style={{ color: 'rgba(245,240,232,0.7)' }}>
                  Dr. Mann is online · seen 0m ago
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 — Session + audit */}
          <div className="rounded-none border p-6 overflow-hidden relative transition-all duration-300 hover:shadow-lg"
               style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <div className="text-xs font-mono tracking-widest mb-2"
                     style={{ color: 'var(--color-text-muted)' }}>03</div>
                <h3 className="text-xl font-bold mb-2"
                    style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>
                  Session starts, audit trail begins
                </h3>
                <p className="text-sm leading-relaxed"
                   style={{ color: 'var(--color-text-secondary)' }}>
                  Every session is automatically logged — join time, duration, participants — for full HIPAA compliance.
                </p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border"
                   style={{ background: 'var(--color-teal-dim)', borderColor: 'var(--color-border)' }}>
                <ShieldCheck size={18} style={{ color: 'var(--color-teal)' }} />
              </div>
            </div>

            <div className="border overflow-hidden"
                 style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-2 px-3 py-2 border-b"
                   style={{ background: 'var(--color-surface-2)', borderColor: 'var(--color-border)' }}>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#22C55E' }} />
                <span className="text-[10px] font-mono font-bold"
                      style={{ color: 'var(--color-text-primary)' }}>Session Audit Log</span>
                <span className="ml-auto text-[9px] font-mono px-1.5 py-0.5 border"
                      style={{
                        background:  'var(--color-teal-dim)',
                        borderColor: 'var(--color-border)',
                        color:       'var(--color-teal)',
                      }}>HIPAA</span>
              </div>
              <div className="p-3 space-y-2" style={{ background: 'var(--color-surface)' }}>
                {[
                  { time: '9:30:02', event: 'Room created',       detail: 'Session #4812',        color: 'var(--color-text-muted)' },
                  { time: '9:30:14', event: 'Dr. Mann joined',    detail: 'via secure link',       color: 'var(--color-teal)' },
                  { time: '9:31:08', event: 'Sarah Chen joined',  detail: 'waiting room cleared',  color: 'var(--color-teal)' },
                  { time: '9:57:44', event: 'Session ended',      detail: 'Duration: 26m 36s',     color: 'var(--color-text-secondary)' },
                ].map(({ time, event, detail, color }) => (
                  <div key={time} className="flex items-start gap-2">
                    <div className="text-[9px] font-mono w-14 shrink-0 mt-0.5"
                         style={{ color: 'var(--color-text-muted)' }}>{time}</div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono font-semibold" style={{ color }}>{event}</span>
                      <span className="text-[9px] font-mono ml-1"
                            style={{ color: 'var(--color-text-muted)' }}>— {detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 4 — Billing (wide, dark) */}
          <div className="md:col-span-2 p-6 lg:p-8 overflow-hidden relative transition-all duration-300 hover:shadow-lg"
               style={{ background: '#0D1520', color: '#F0F4FA' }}>
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-mono tracking-widest mb-2"
                     style={{ color: 'rgba(240,244,250,0.4)' }}>04</div>
                <h3 className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: '#F0F4FA' }}>
                  Billing processed automatically
                </h3>
                <p className="text-sm leading-relaxed max-w-xs"
                   style={{ color: 'rgba(240,244,250,0.7)', fontWeight: 300 }}>
                  Collect session fees at session end. No manual invoicing. Receipts sent automatically.
                </p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border"
                   style={{ background: 'rgba(240,244,250,0.08)', borderColor: 'rgba(240,244,250,0.12)' }}>
                <CreditCard size={18} style={{ color: '#F0F4FA' }} />
              </div>
            </div>

            <div className="border overflow-hidden"
                 style={{ borderColor: 'rgba(240,244,250,0.12)' }}>
              <div className="flex items-center justify-between px-4 py-3 border-b"
                   style={{ background: 'rgba(240,244,250,0.05)', borderColor: 'rgba(240,244,250,0.10)' }}>
                <div className="flex items-center gap-2">
                  <Video size={13} style={{ color: 'var(--color-teal)' }} />
                  <span className="text-[10px] font-mono font-bold">InstaRoom Billing</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 border"
                     style={{ background: 'rgba(34,197,94,0.15)', borderColor: 'rgba(34,197,94,0.3)' }}>
                  <div className="w-1 h-1 rounded-full" style={{ background: '#22C55E' }} />
                  <span className="text-[9px] font-mono font-bold" style={{ color: '#22C55E' }}>
                    Payment Collected
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-2.5"
                   style={{ background: 'rgba(240,244,250,0.02)' }}>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono" style={{ color: 'rgba(240,244,250,0.7)' }}>
                    Telehealth Session — 50 min
                  </span>
                  <span className="text-[11px] font-mono font-bold">$200.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono" style={{ color: 'rgba(240,244,250,0.5)' }}>
                    Insurance copay applied
                  </span>
                  <span className="text-[11px] font-mono" style={{ color: 'rgba(240,244,250,0.5)' }}>
                    −$125.00
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2.5 border-t"
                     style={{ borderColor: 'rgba(240,244,250,0.10)' }}>
                  <span className="text-[11px] font-mono font-bold">Patient charge</span>
                  <span className="text-xl font-bold" style={{ color: 'var(--color-teal)' }}>$75.00</span>
                </div>
                <div className="flex items-center gap-2 pt-0.5">
                  <div className="flex-1 h-7 border flex items-center gap-2 px-2.5"
                       style={{ background: 'rgba(240,244,250,0.06)', borderColor: 'rgba(240,244,250,0.10)' }}>
                    <div className="w-4 h-2.5" style={{ background: 'rgba(0,122,64,0.5)' }} />
                    <span className="text-[9px] font-mono" style={{ color: 'rgba(240,244,250,0.4)' }}>
                      •••• •••• •••• 4291
                    </span>
                  </div>
                  <div className="text-[9px] font-mono font-bold flex items-center gap-1"
                       style={{ color: '#22C55E' }}>
                    <CheckCircle size={11} /> Charged
                  </div>
                </div>
              </div>
              <div className="px-4 py-2.5 border-t flex items-center justify-between"
                   style={{ background: 'rgba(240,244,250,0.03)', borderColor: 'rgba(240,244,250,0.08)' }}>
                <span className="text-[9px] font-mono" style={{ color: 'rgba(240,244,250,0.3)' }}>
                  Powered by InstaRoom · Receipt sent to patient
                </span>
                <span className="text-[9px] font-mono" style={{ color: 'rgba(240,244,250,0.3)' }}>
                  Aug 21, 2026
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}