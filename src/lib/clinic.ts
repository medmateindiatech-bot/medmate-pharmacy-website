// Copy for the MedMate Doctor clinic software page (/clinic-software). The product is built but not yet open to
// clinics, so every claim is worded as "at launch": no live-customer numbers, no testimonials, no "live today" tags.
// Prices are the planned launch prices and may change; the page says so.

export const HERO_CHECKS = ["Built for Indian clinics", "ABDM-ready from day one", "14-day free trial at launch", "Early-access clinics go first"];

/** A visit, door to follow-up: [icon, title, text]. */
export const FLOW: [string, string, string][] = [
  ["phone", "Check-in", "Patients confirm their mobile at a kiosk, at the desk or on their own phone, and get a token by SMS with their place in the queue."],
  ["heart", "Vitals", "The nurse records BP, temperature, SpO₂ and weight. Anything worrying is flagged and the patient moves up the queue."],
  ["steth", "Consult", "The doctor sees the patient’s own words, vitals and history, examines, and gets suggestions and safety checks while writing."],
  ["rx-doc", "Prescription & bill", "A signed e-prescription goes to the patient, their ABHA and, if they choose, their pharmacy. The desk collects the fee."],
  ["clock", "Follow-up", "The follow-up is booked before they leave, with reminders a day and an hour before."],
];

/** Everything in the software: [icon, title, text]. */
export const FEATURES: [string, string, string][] = [
  ["rx-doc", "Prescriptions doctors trust", "Examination, several diagnoses with ICD-10 codes, suggestions from the symptoms, and checks for interactions, duplicates, pregnancy, age and maximum doses."],
  ["user", "Queue and kiosk", "Self check-in on a tablet or the patient’s phone, a live token page, call-next, and priority for the very unwell."],
  ["clock", "Appointments", "Doctor calendars, first free slot, an online booking page for each clinic, reminders, and no-show tracking."],
  ["video", "Teleconsultation", "Video or phone consults with identity and consent recorded, as the Telemedicine Practice Guidelines 2020 require."],
  ["card", "Billing and UPI", "GST-compliant bills with your own series, UPI, card and cash, refunds with reasons, and a day-close cash book."],
  ["flask", "Lab and diagnostics", "Sample collection with tube labels, results with reference ranges, and critical values straight to the doctor’s inbox."],
  ["pill", "Send to the pharmacy", "The patient chooses a pharmacy and the prescription goes to its MedMate Partner console, or by SMS, with status back to the clinic."],
  ["id", "Patient records", "One timeline of visits, readings, results and bills, with allergies on top and every opening of a record logged."],
  ["percent", "Reports", "Money, patients, waiting times, no-shows, missed follow-ups and busiest hours, compared with the period before."],
  ["pin", "Many locations", "Each branch with its rooms, phone and HFR ID; doctors placed where they work; every device knows where it is."],
  ["shield", "Roles and activity log", "Doctor, nurse, front desk, lab, accounts and admin each see only what they need. Who did what is recorded and can’t be edited."],
  ["chat", "Messages patients understand", "Tokens, reminders and results in plain English, Kannada and Hindi."],
];

/** Indian rules the software follows: [title, text]. */
export const RULES: [string, string][] = [
  ["Telemedicine Practice Guidelines 2020", "Patient identity and consent recorded on every online consult; medicines that can’t be prescribed remotely are blocked."],
  ["DPDP Act 2023", "A data processing agreement at sign-up, role-based access, and a log of who opened which record."],
  ["IMC Regulations 2002", "Prescriptions carry the registration number and generic names, and records are kept as long as required."],
  ["Drugs and Cosmetics Rules", "Schedule X and narcotic medicines stay on paper; the patient always chooses their pharmacy."],
  ["GST Rule 46", "Exempt healthcare and taxable services billed correctly, with your own invoice series."],
];

/** Who it is for: [icon, title, text]. */
export const FOR_WHOM: [string, string, string][] = [
  ["steth", "Doctors in their own clinic", "One doctor, one room, a front desk: queue, prescriptions, bills and follow-ups without paper."],
  ["store", "Polyclinics", "Several doctors and specialities sharing a reception, a nurse station and a lab desk."],
  ["pin", "Clinic chains", "Many branches on one dashboard, with each location’s rooms, doctors and money kept apart."],
];

export type Plan = { name: string; price: number | null; line: string; features: string[]; popular?: boolean };
/** Planned launch prices, before 18% GST. */
export const PLANS: Plan[] = [
  { name: "Solo", price: 999, line: "For a doctor running their own clinic.", features: ["1 doctor, 1 location, up to 3 staff", "Queue, kiosk check-in and token SMS", "Doctor Console with safety checks", "Signed e-prescriptions (FHIR, ABDM-ready)", "GST billing and UPI", "Appointments and online booking"] },
  { name: "Clinic", price: 2499, popular: true, line: "For polyclinics and growing practices.", features: ["Up to 5 doctors, 3 locations, 20 staff", "Everything in Solo", "Nurse station, lab desk and reception desk", "Teleconsultation", "Send to the patient’s pharmacy", "Reports, revenue share and activity log"] },
  { name: "Enterprise", price: null, line: "For hospitals, chains and special needs.", features: ["Any number of doctors and locations", "Everything in Clinic", "Your own database in an Indian region", "Lab, pharmacy and HIS connections", "Single sign-on and custom roles", "Onboarding, training and agreed uptime"] },
];

export const FAQS: [string, string][] = [
  ["When can my clinic start using it?", "MedMate Doctor is launching soon, starting in Bengaluru. Join the early-access list and we will contact you to set up your clinic before the public launch."],
  ["What will it cost?", "The planned launch prices are Solo ₹999 a month, Clinic ₹2,499 a month and custom pricing for Enterprise, plus 18% GST, with two months free on yearly billing. Every new clinic gets a 14-day free trial of the full Clinic plan. Prices may change before launch; early-access clinics will be told first."],
  ["Do I need new hardware?", "No. It runs in the browser on the laptop, tablet or phone you already have. A tablet works well as the patient kiosk, and any printer can print prescriptions and bills."],
  ["Is it ready for ABDM?", "Yes. Doctors are verified through HPR, clinics can add their HFR ID, prescriptions are signed FHIR R4 records, and patients can share them to their ABHA with consent."],
  ["How does it work with pharmacies?", "When a doctor signs a prescription, the patient chooses a pharmacy. If that pharmacy uses the MedMate Partner console, the prescription arrives on its dashboard; otherwise it is sent by SMS. Controlled medicines are never sent electronically."],
  ["Who can see patient records?", "Only the people whose job needs them. The clinic admin decides what each profile can open, clinical notes stay with doctors, and every opening of a record is logged and can’t be edited."],
  ["Will you move my existing patient data?", "Yes. Early-access clinics get help importing their patient list and appointments, and training for the doctors and front desk."],
];
