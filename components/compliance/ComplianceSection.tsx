'use client';

import { useState } from 'react';
import styles from './ComplianceSection.module.scss';
import {
  Lock, User, Video, FileSignature, Database,
  CheckCircle, Copy, Download, ChevronDown,
} from 'lucide-react';
import React from 'react';

// ─── TYPES ──────────────────────────────────────────────────────────────────

type StreamStatus = 'LOCKED' | 'LIVE';

interface CptCode {
  code: string;
  description: string;
  fee: number;
}

interface CallRow {
  id: string;
  ts: string;
  provider: string;
  patient: string;
  duration: string;
  idVerified: boolean;
  stream: StreamStatus;
  insuranceBacked: boolean;
  specialty: string;
  roomId: string;
  patientAnon: string;
  browserLine: string;
  geoCoords: string;
  geoState: string;
  emergencyProxy: string;
  consentTs: string;
  sessionFee: number;
  transactionId: string;
  settled: boolean;
}

// ─── CPT MAPPING ────────────────────────────────────────────────────────────

function getCptCodes(specialty: string, duration: string, fee: number): CptCode[] {
  if (duration === 'ACTIVE') return [];

  const mins = parseDurationMins(duration);

  if (specialty === 'mental_health') {
    if (mins >= 53) return [
      { code: '90837', description: 'Psychotherapy, 60 min', fee },
      { code: '90785', description: 'Interactive complexity add-on', fee: 35 },
    ];
    if (mins >= 38) return [
      { code: '90834', description: 'Psychotherapy, 45 min', fee },
    ];
    return [
      { code: '90832', description: 'Psychotherapy, 30 min', fee },
    ];
  }

  if (specialty === 'primary_care') {
    if (mins >= 40) return [{ code: '99215', description: 'Office visit, high complexity', fee }];
    if (mins >= 25) return [{ code: '99214', description: 'Office visit, moderate complexity', fee }];
    return [{ code: '99213', description: 'Office visit, low complexity', fee }];
  }

  return [{ code: '99499', description: 'Unlisted E&M service', fee }];
}

function parseDurationMins(duration: string): number {
  const match = duration.match(/(\d+)m/);
  return match ? parseInt(match[1], 10) : 0;
}

// ─── DATA ───────────────────────────────────────────────────────────────────

const CALL_ROWS: CallRow[] = [
  {
    id: 'CR-00412', ts: '2026-06-14 08:14:07 UTC',
    provider: 'Dr. K. Osei', patient: 'M. Chen', duration: '18m 03s',
    idVerified: true, stream: 'LOCKED',
    insuranceBacked: true, specialty: 'mental_health',
    roomId: 'ROOM_CF0075A4E938', patientAnon: '_crypto_anon_4a91c',
    browserLine: 'Chrome Desktop (macOS 14.4)',
    geoCoords: '37.7749° N, 122.4194° W', geoState: 'CA',
    emergencyProxy: 'SFFD Dispatch Routed // Nearest Core Facility: SF General',
    consentTs: 'June 14, 2026 - 08:12:04 AM UTC',
    sessionFee: 150, transactionId: 'ch_3Mv8Y2LkdIwJwBCxd92', settled: true,
  },
  {
    id: 'CR-00413', ts: '2026-06-14 09:30:44 UTC',
    provider: 'Dr. K. Osei', patient: 'R. Okafor', duration: '24m 11s',
    idVerified: true, stream: 'LOCKED',
    insuranceBacked: false, specialty: 'mental_health',
    roomId: 'ROOM_CF0075A4E938', patientAnon: '_crypto_anon_7c33f',
    browserLine: 'Firefox Desktop (Windows 11)',
    geoCoords: '34.0522° N, 118.2437° W', geoState: 'CA',
    emergencyProxy: 'LAPD Dispatch Routed // Nearest Core Facility: Cedars-Sinai',
    consentTs: 'June 14, 2026 - 09:28:17 AM UTC',
    sessionFee: 200, transactionId: 'ch_9Xp2T4MnrKwQzBVye18', settled: true,
  },
  {
    id: 'CR-00414', ts: '2026-06-14 11:30:00 UTC',
    provider: 'Dr. K. Osei', patient: 'A. Singh', duration: 'ACTIVE',
    idVerified: true, stream: 'LIVE',
    insuranceBacked: true, specialty: 'primary_care',
    roomId: 'ROOM_CF0075A4E938', patientAnon: '_crypto_anon_2b77e',
    browserLine: 'Safari Mobile Native (iOS 19.4)',
    geoCoords: '37.7749° N, 122.4194° W', geoState: 'CA',
    emergencyProxy: 'SFFD Dispatch Routed // Nearest Core Facility: SF General',
    consentTs: 'June 14, 2026 - 11:28:00 AM UTC',
    sessionFee: 175, transactionId: 'PENDING CLOSE', settled: false,
  },
];

const PILLARS = [
  {
    Icon: FileSignature,
    title: 'Tele-Consent',
    desc: 'Consent is captured, timestamped, and cryptographically bound to the call record before video opens.',
  },
  {
    Icon: User,
    title: 'Identity Lock',
    desc: 'Patient identity verified and linked to stream metadata — no anonymous joins, no proxy access.',
  },
  {
    Icon: Database,
    title: 'Immutable Audit Trail',
    desc: 'Every call row is write-once. Consent, identity, stream hash, and duration are sealed on close.',
  },
  {
    Icon: Lock,
    title: 'End-to-End Encryption',
    desc: 'All streams encrypted in transit and at rest. HIPAA-grade TLS with forward secrecy.',
  },
];

// ─── AUDIT LOG PANEL ────────────────────────────────────────────────────────

function AuditPanel({ row }: { row: CallRow }) {
  const cptCodes = getCptCodes(row.specialty, row.duration, row.sessionFee);
  const isLive = row.stream === 'LIVE';

  const summaryText = [
    `SESSION AUDIT LOG // ${row.roomId}`,
    `Date/Time: ${row.ts}`,
    `Duration: ${row.duration}`,
    `Patient ID: ${row.patientAnon}`,
    `Consent: VERIFIED`,
    `ID Verified: YES`,
    `Geo-Verify: ${row.geoCoords} — CA LICENSED`,
    `Session Fee: $${row.sessionFee.toFixed(2)}`,
    `Transaction: ${row.transactionId}`,
    row.insuranceBacked && cptCodes.length > 0
      ? `CPT Codes: ${cptCodes.map(c => `${c.code} — ${c.description}`).join(', ')}`
      : null,
  ].filter(Boolean).join('\n');

  return (
    <div className={styles.auditPanel}>
      <div className={styles.auditLog}>

        <div className={styles.auditDivider}>{'='.repeat(72)}</div>
        <div className={styles.auditTitle}>SESSION AUDIT LOG // {row.roomId}</div>
        <div className={styles.auditDivider}>{'='.repeat(72)}</div>

        <div className={styles.auditSection}>
          <div className={styles.auditSectionTitle}>[ GENERAL METADATA ]</div>
          <div className={styles.auditDivider}>{'-'.repeat(72)}</div>
          <AuditRow label="Date/Time" value={row.ts} />
          <AuditRow label="Session Duration" value={row.duration} />
          <AuditRow label="Patient ID" value={row.patientAnon} />
        </div>

        <div className={styles.auditSection}>
          <div className={styles.auditSectionTitle}>[ COMPLIANCE & JURISDICTION DATA ]</div>
          <div className={styles.auditDivider}>{'-'.repeat(72)}</div>
          <AuditRow label="Telemetry Engine" value="MediaDance v1.0.4 // Active Pipe Stability [HIGH]" />
          <AuditRow label="Browser Line" value={row.browserLine} />
          <AuditRow label="GPS Geo-Verify" value={row.geoCoords} />
          <div className={styles.auditVerified}>
            {'  '}↳ Status: VERIFIED [Inside Clinician Licensed State: {row.geoState}]
          </div>
          <AuditRow label="Emergency Proxy" value={row.emergencyProxy} />
        </div>

        <div className={styles.auditSection}>
          <div className={styles.auditSectionTitle}>[ PATIENT ATTESTATION ]</div>
          <div className={styles.auditDivider}>{'-'.repeat(72)}</div>
          <AuditRow label="Timestamp" value={row.consentTs} />
          <div className={styles.auditVerified}>[✓] Direct Telehealth Delivery Agreement Signed</div>
          <div className={styles.auditVerified}>[✓] Patient Confirmed Secure, Confidential Physical Space</div>
        </div>

        <div className={styles.auditSection}>
          <div className={styles.auditSectionTitle}>[ FINANCIAL VELOCITY CAPTURE ]</div>
          <div className={styles.auditDivider}>{'-'.repeat(72)}</div>
          <AuditRow label="Merchant Line" value="Stripe Connect Direct Account" />
          <AuditRow label="Base Session Fee" value={`$${row.sessionFee.toFixed(2)}`} />
          <AuditRow label="Platform Cut" value="$0.00 (100% Provider Retained)" />
          <AuditRow label="Transaction ID" value={row.transactionId} />
          <div className={row.settled ? styles.auditSettled : styles.auditPending}>
            {row.settled ? '[✓ SETTLED & DISBURSED]' : '[⏳ SESSION ACTIVE — WILL LOCK ON CLOSE]'}
          </div>
        </div>

        {row.insuranceBacked && cptCodes.length > 0 && (
          <div className={styles.auditSection}>
            <div className={styles.auditSectionTitle}>[ CPT PROCEDURE CODES ]</div>
            <div className={styles.auditDivider}>{'-'.repeat(72)}</div>
            <div className={styles.cptTable}>
              {cptCodes.map(c => (
                <div key={c.code} className={styles.cptRow}>
                  <span className={styles.cptCode}>{c.code}</span>
                  <span className={styles.cptDesc}>{c.description}</span>
                  <span className={styles.cptFee}>${c.fee.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.auditDivider}>{'-'.repeat(72)}</div>
      </div>

      <div className={styles.auditActions}>
        {!isLive ? (
          <>
            <button
              className={styles.auditBtn}
              onClick={() => navigator.clipboard.writeText(summaryText)}
            >
              <Copy size={12} />
              Copy compliance summary for EHR charting
            </button>
            <button className={styles.auditBtn}>
              <Download size={12} />
              Export record
            </button>
          </>
        ) : (
          <button className={`${styles.auditBtn} ${styles.auditBtnDisabled}`} disabled>
            <Lock size={12} />
            Locks on session close
          </button>
        )}
      </div>
    </div>
  );
}

function AuditRow({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.auditKv}>
      <span className={styles.auditKey}>{label.padEnd(18)}</span>
      <span className={styles.auditValue}>{value}</span>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export default function ComplianceSection() {
  const [openRow, setOpenRow] = useState<string>('');

  const toggle = (id: string) => setOpenRow(prev => prev === id ? '' : id);

  return (
    <section className={styles.section} id="compliance">
      <div className={styles.container}>

        <div className={styles.eyebrow}>06 — HIPAA COMPLIANCE</div>

        <div className={styles.header}>
          <div>
            <h2 className={styles.headline}>
              Immutable Call Rows.<br />
              <span>Built-In Compliance.</span>
            </h2>
            <div className={styles.comingSoon}>⚡ EMRLite — Coming Q3 2026</div>
          </div>
          <p className={styles.subhead}>
            Consent, identity, and stream data lock together seamlessly
            on every call — no third-party compliance tool required.
          </p>
        </div>

        <div className={styles.tableWrap}>
          <div className={styles.tableHeader}>
            <Video size={12} color="var(--color-teal)" />
            <span className={styles.tableLabel}>CALL LOG — WRITE-ONCE RECORDS</span>
            <span className={styles.immutableBadge}>DOWNLOAD</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {['CALL ID', 'TIMESTAMP (UTC)', 'PROVIDER', 'PATIENT', 'DURATION', 'CONSENT', 'ID VERIFIED', 'STREAM', ''].map((h, i) => (
                    <th key={i} className={styles.th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CALL_ROWS.map(row => {
                  const isOpen = openRow === row.id;
                  return (
                    <React.Fragment key={row.id}>
                      <tr
                      key={row.id}
                        className={`${styles.tr} ${row.stream === 'LIVE' ? styles.live : ''} ${isOpen ? styles.trOpen : ''}`}
                        onClick={() => toggle(row.id)}
                      >
                        <td className={styles.td}>
                          <span className={styles.callId}>{row.id}</span>
                        </td>
                        <td className={styles.td}>
                          <span className={styles.timestamp}>{row.ts}</span>
                        </td>
                        <td className={styles.td}>
                          <span className={styles.providerName}>{row.provider}</span>
                        </td>
                        <td className={styles.td}>
                          <span className={styles.providerName}>{row.patient}</span>
                        </td>
                        <td className={styles.td}>
                          <span className={`${styles.duration} ${row.duration === 'ACTIVE' ? styles.active : ''}`}>
                            {row.duration}
                          </span>
                        </td>
                        <td className={styles.td}>
                          <CheckCircle size={13} color="var(--color-teal)" />
                        </td>
                        <td className={styles.td}>
                          <CheckCircle size={13} color="var(--color-teal)" />
                        </td>
                        <td className={styles.td}>
                          <span className={`${styles.streamBadge} ${row.stream === 'LIVE' ? styles.live : ''}`}>
                            {row.stream}
                          </span>
                        </td>
                        <td className={styles.td}>
                          <ChevronDown
                            size={14}
                            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                            color="var(--color-text-muted)"
                          />
                        </td>
                      </tr>
                      {isOpen && (
                        <tr key={`${row.id}-panel`} className={styles.trPanel}>
                          <td colSpan={9} className={styles.tdPanel}>
                            <AuditPanel row={row} />
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.pillars}>
          {PILLARS.map(({ Icon, title, desc }) => (
            <div key={title} className={styles.pillar}>
              <div className={styles.pillarIcon}><Icon size={15} /></div>
              <div className={styles.pillarTitle}>{title.toUpperCase()}</div>
              <p className={styles.pillarDesc}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
