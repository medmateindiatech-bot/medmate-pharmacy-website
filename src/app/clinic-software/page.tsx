import Link from "next/link";
import { Breadcrumbs, Container, Faq, Heading, Icon, JsonLd } from "@/components/ui";
import { FAQS, FEATURES, FLOW, FOR_WHOM, HERO_CHECKS, PLANS, RULES } from "@/lib/clinic";
import { SITE_URL, pageMeta } from "@/lib/site";

export const metadata = {
  ...pageMeta({
    title: "MedMate Doctor: clinic software for India, coming soon",
    description: "MedMate Doctor is clinic software built for Indian clinics: check-in and queue, vitals, a Doctor Console with prescription safety checks, signed e-prescriptions, GST billing, appointments and teleconsultation, ready for ABDM. Coming soon; join early access.",
    path: "/clinic-software",
  }),
  keywords: ["clinic management software India", "clinic software Bengaluru", "doctor prescription software", "e-prescription software", "ABDM clinic software", "polyclinic software", "OPD management software", "MedMate Doctor"],
};

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
const field = "h-12 w-full rounded-xl border-[1.5px] border-line-2 bg-surface px-3.5 text-[16px] outline-none placeholder:text-faint focus:border-green focus:ring-[3px] focus:ring-mint-200";

function Soon({ dark }: { dark?: boolean }) {
  return <span className={`d-tag rounded-md px-2 py-0.5 ${dark ? "bg-gold text-forest" : "bg-gold-50 text-gold-ink ring-1 ring-gold-100"}`}>Coming soon</span>;
}

/** A sample of the Doctor Console, drawn in code so it stays sharp and can be read by screen readers. */
function ConsoleMock() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="overflow-hidden rounded-[24px] bg-surface text-ink shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)] ring-1 ring-white/20">
        <div className="flex items-center gap-2 bg-forest px-4 py-3 text-white">
          <span className="flex gap-1.5" aria-hidden><span className="size-2.5 rounded-full bg-white/30" /><span className="size-2.5 rounded-full bg-white/30" /><span className="size-2.5 rounded-full bg-white/30" /></span>
          <span className="d-caption font-semibold">Doctor Console · Meera N, 29 F · W-04</span>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-3 rounded-2xl bg-surface-2 p-3">
            <p className="d-tag text-muted">What the patient told us</p>
            <p className="text-[14px] leading-5">“Fever 3 days, throat pain, dry cough at night”</p>
            <p className="d-tag text-muted">Vitals</p>
            <div className="flex flex-wrap gap-1.5 text-[13px] font-semibold">
              <span className="rounded-md bg-gold-50 px-2 py-0.5 text-gold-ink">101.2°F</span><span className="rounded-md bg-surface px-2 py-0.5">118/76</span><span className="rounded-md bg-surface px-2 py-0.5">SpO₂ 97%</span>
            </div>
            <p className="d-tag text-muted">Allergies</p>
            <p className="text-[14px]">None known</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-xl border border-line px-3 py-2"><p className="d-tag text-muted">Diagnosis</p><p className="text-[14px] font-semibold">J02.9 Acute pharyngitis</p></div>
            {[["Paracetamol 650 mg", "1 tab · 1-0-0-1 · after food · 3 days"], ["Chlorhexidine 0.2%", "10 ml gargle · twice a day · 7 days"]].map(([m, d]) => (
              <div key={m} className="rounded-xl border-l-[3px] border-green bg-mint-50 px-3 py-2"><p className="text-[14px] font-bold">{m}</p><p className="d-caption text-muted">{d}</p></div>
            ))}
            <div className="flex items-start gap-2 rounded-xl bg-mint-100 px-3 py-2 text-green-700"><Icon name="shield" size={16} className="mt-0.5" /><span className="d-caption font-semibold">Safety checks passed: interactions, duplicates, age, doses</span></div>
            <span className="d-btn ml-auto inline-flex h-10 items-center gap-2 rounded-xl bg-gold px-4 text-[14px] text-forest">Sign &amp; send<Icon name="share" size={16} /></span>
          </div>
        </div>
      </div>
      <div className="anim-float absolute -left-6 bottom-12 flex items-center gap-3 rounded-2xl bg-surface p-3 pr-4 text-ink shadow-sh3 max-sm:hidden">
        <span className="flex size-10 items-center justify-center rounded-xl bg-forest text-gold"><Icon name="pill" /></span>
        <span className="flex flex-col leading-tight"><span className="text-[15px] font-bold">Sent to the patient’s pharmacy</span><span className="d-caption text-muted">On their MedMate Partner console</span></span>
      </div>
      <p className="d-caption mt-3 text-center text-mint-200">Preview of MedMate Doctor · sample data</p>
    </div>
  );
}

export default function ClinicSoftware() {
  return (
    <main>
      {/* Hero */}
      <section className="brand-zone relative overflow-hidden text-white">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative flex flex-col gap-6 pt-8">
          <div className="[&_a]:text-mint-200 [&_a:hover]:text-white [&_span[aria-current]]:text-white"><Breadcrumbs base={SITE_URL} items={[["Home", "/"], ["For clinics", "/clinic-software"]]} /></div>
          <div className="grid items-center gap-10 pb-10 sm:gap-12 sm:pb-16 lg:grid-cols-[1fr_1.05fr] lg:pb-24">
            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <Soon dark />
                <p className="d-eyebrow flex items-center gap-2 text-gold"><span className="h-px w-6 bg-gold" />MedMate Doctor · clinic software</p>
              </div>
              <h1 className="d-hero">Run your whole clinic from <span className="text-gold">one screen.</span></h1>
              <p className="d-lead max-w-[580px] text-mint-200">Check-in, vitals, consult, e-prescription, bill and follow-up, joined up. Built around how Indian clinics really work, and ready for ABDM. <strong className="font-semibold text-white">Launching soon, starting in Bengaluru.</strong> Join early access and your clinic is set up first.</p>
              <div className="flex flex-wrap gap-3">
                <a href="#early-access" className="press d-btn inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold px-5 text-forest hover:bg-gold-200 max-sm:w-full">Get early access<Icon name="chev-r" size={18} /></a>
                <a href="#features" className="press d-btn inline-flex h-12 items-center justify-center rounded-xl px-5 text-white ring-[1.5px] ring-white/40 hover:bg-white/10 max-sm:w-full">See what’s inside</a>
              </div>
              <ul className="grid max-w-[520px] grid-cols-2 gap-2">
                {HERO_CHECKS.map((t) => <li key={t} className="d-caption flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 font-semibold text-mint-200 ring-1 ring-white/15"><Icon name="check" size={14} className="text-gold" />{t}</li>)}
              </ul>
            </div>
            <ConsoleMock />
          </div>
        </Container>
      </section>

      {/* Standards strip */}
      <section className="border-b border-line bg-surface">
        <Container className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-5">
          {["ABDM-ready: ABHA · HPR · HFR", "FHIR R4 prescriptions", "Telemedicine Guidelines 2020", "DPDP Act 2023", "GST-compliant billing", "English · ಕನ್ನಡ · हिन्दी"].map((t) => <span key={t} className="d-caption flex items-center gap-1.5 font-semibold text-ink-2"><Icon name="check" size={14} className="text-green" />{t}</span>)}
        </Container>
      </section>

      <Container className="flex flex-col gap-16 py-14 lg:gap-28 lg:py-24">
        {/* How a visit flows */}
        <section id="how" className="flex scroll-mt-20 flex-col gap-8 lg:gap-10">
          <Heading center eyebrow="How a visit flows" title="From the door to the follow-up, nothing" accent="falls through" lead="Each step hands the patient to the next person with everything they need, so nobody asks the same question twice." />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FLOW.map(([ic, t, s], i) => (
              <li key={t} className="flex gap-4 rounded-2xl border border-line p-4 sm:flex-col sm:gap-3 sm:p-5">
                <div className="flex shrink-0 items-start justify-between sm:items-center">
                  <span className={`flex size-11 items-center justify-center rounded-xl font-bold ${i % 2 ? "bg-gold text-forest" : "bg-forest text-gold"}`}>{i + 1}</span>
                  <Icon name={ic} size={22} className="hidden text-faint sm:block" />
                </div>
                <div className="flex min-w-0 flex-col gap-1 sm:contents">
                  <h3 className="d-h3">{t}</h3>
                  <p className="text-[15px] leading-6 text-ink-2">{s}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Features */}
        <section id="features" className="flex scroll-mt-20 flex-col gap-8 lg:gap-10">
          <Heading center eyebrow="What’s inside" title="Everything a clinic runs on, in one" accent="place" lead="Each part is built for the person who uses it: the front desk, the nurse, the lab, the doctor and the owner. All of it arrives at launch." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(([ic, t, s]) => (
              <div key={t} className="flex flex-col gap-3 rounded-2xl border border-line p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-mint-100 text-green-700"><Icon name={ic} size={22} /></span>
                  <Soon />
                </div>
                <h3 className="d-h3">{t}</h3>
                <p className="text-ink-2">{s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pharmacy link */}
        <section className="grid items-center gap-8 rounded-3xl bg-forest p-6 text-white sm:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-4">
            <p className="d-eyebrow text-gold">Clinic and pharmacy, connected</p>
            <h2 className="d-h2">The prescription reaches the patient’s <span className="text-gold">pharmacy</span></h2>
            <p className="d-lead text-mint-200">When the doctor signs, the patient chooses where to buy their medicines. Pharmacies on the MedMate Partner console get it on their dashboard and send the status back to the clinic. Controlled medicines always stay on paper.</p>
            <Link href="/pharmacy-partner" className="press d-btn inline-flex h-12 w-fit items-center gap-2 rounded-xl bg-gold px-5 text-forest hover:bg-gold-200 max-sm:w-full">See the Partner console<Icon name="chev-r" size={18} /></Link>
          </div>
          <ul className="flex flex-col gap-3">
            {[["steth", "Doctor signs the e-prescription"], ["user", "Patient picks a pharmacy"], ["store", "Pharmacy prepares the medicines"], ["check", "Clinic sees “ready for pickup”"]].map(([ic, t], i) => (
              <li key={t} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/15">
                <span className="flex size-10 items-center justify-center rounded-xl bg-gold font-bold text-forest">{i + 1}</span>
                <Icon name={ic} size={20} className="text-gold" />
                <span className="font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Rules */}
        <section className="flex flex-col gap-8 lg:gap-10">
          <Heading center eyebrow="Built for India’s rules" title="Compliance is part of the work, not an" accent="afterthought" lead="The checks happen as you work, so the clinic stays on the right side of the law without extra paperwork." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {RULES.map(([t, s]) => (
              <div key={t} className="flex flex-col gap-2 rounded-2xl bg-mint-50 p-4 ring-1 ring-mint-200 sm:p-5">
                <Icon name="shield" size={22} className="text-green-700" />
                <h3 className="text-[16px] font-bold leading-6">{t}</h3>
                <p className="text-[14px] leading-6 text-ink-2">{s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who it is for */}
        <section className="flex flex-col gap-8 lg:gap-10">
          <Heading center eyebrow="Who it’s for" title="From one doctor to many" accent="branches" />
          <div className="grid gap-4 md:grid-cols-3">
            {FOR_WHOM.map(([ic, t, s]) => (
              <div key={t} className="flex flex-col gap-3 rounded-2xl border border-line p-5 sm:p-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-forest text-gold"><Icon name={ic} size={22} /></span>
                <h3 className="d-h3">{t}</h3>
                <p className="text-ink-2">{s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planned pricing */}
        <section id="pricing" className="flex scroll-mt-20 flex-col gap-8 lg:gap-10">
          <Heading center eyebrow="Planned launch pricing" title="Simple plans, with a free" accent="trial" lead="Every new clinic gets 14 days of the full Clinic plan free. Prices are per clinic, plus 18% GST, with two months free on yearly billing. They may change before launch; early-access clinics hear first." />
          <div className="grid gap-4 pt-2 md:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} className={`relative flex flex-col gap-4 rounded-3xl p-5 sm:p-6 ${p.popular ? "bg-forest text-white shadow-sh3" : "border border-line"}`}>
                {p.popular && <span className="d-tag absolute -top-3 left-6 rounded-md bg-gold px-2.5 py-1 text-forest">MOST POPULAR</span>}
                <div className="flex flex-col gap-1">
                  <h3 className="d-h3">{p.name}</h3>
                  <p className={`text-[15px] ${p.popular ? "text-mint-200" : "text-ink-2"}`}>{p.line}</p>
                </div>
                <p className="flex items-end gap-1">
                  <span className={`text-[40px] font-extrabold leading-none tracking-[-0.03em] ${p.popular ? "text-gold" : "text-forest"}`}>{p.price ? inr(p.price) : "Custom"}</span>
                  {p.price && <span className={`pb-1 ${p.popular ? "text-mint-200" : "text-muted"}`}>/month</span>}
                </p>
                <ul className="flex flex-1 flex-col gap-2 text-[15px]">
                  {p.features.map((f) => <li key={f} className="flex items-start gap-2"><Icon name="check" size={16} className={`mt-1 ${p.popular ? "text-gold" : "text-green"}`} /><span className={p.popular ? "text-mint-200" : "text-ink-2"}>{f}</span></li>)}
                </ul>
                <a href="#early-access" className={`press d-btn inline-flex h-12 items-center justify-center rounded-xl px-5 ${p.popular ? "bg-gold text-forest hover:bg-gold-200" : "border-[1.5px] border-green text-green hover:bg-mint-50"}`}>{p.price ? "Get early access" : "Talk to us"}</a>
              </div>
            ))}
          </div>
        </section>

        {/* Early access */}
        <section id="early-access" aria-labelledby="early-h" className="grid scroll-mt-20 gap-8 rounded-3xl border border-line p-5 shadow-sh2 sm:rounded-[32px] sm:p-6 md:p-10 lg:grid-cols-[1fr_1.25fr] lg:gap-10">
          <div className="flex flex-col gap-4">
            <p className="d-eyebrow text-green-700">Early access</p>
            <h2 id="early-h" className="d-h2">Be one of the first clinics on <span className="text-green">MedMate Doctor</span></h2>
            <p className="text-ink-2">Tell us about your clinic. We will call you before the public launch to show you the software, set up your clinic and train your team.</p>
            <ul className="flex flex-col gap-2 text-ink-2">
              {["Set up before the public launch", "Help moving your patient list", "14-day free trial of the full Clinic plan"].map((t) => <li key={t} className="flex items-center gap-2"><Icon name="check" size={16} className="text-green" />{t}</li>)}
            </ul>
          </div>
          {/* Netlify Forms collects submissions on the live site (Netlify → Forms). It does not submit on the local dev server. */}
          <form name="clinic-early-access" method="POST" action="/clinic-software/thanks" data-netlify="true" netlify-honeypot="company-website" className="grid gap-4 sm:grid-cols-2">
            <input type="hidden" name="form-name" value="clinic-early-access" />
            <p className="hidden"><label>Leave this empty <input name="company-website" tabIndex={-1} autoComplete="off" /></label></p>
            <label className="flex flex-col gap-1.5 sm:col-span-2"><span className="d-caption font-semibold text-ink-2">Clinic name</span><input name="clinic" required minLength={3} placeholder="Sunrise Family Clinic" className={field} /></label>
            <label className="flex flex-col gap-1.5"><span className="d-caption font-semibold text-ink-2">Your name</span><input name="name" required autoComplete="name" placeholder="Dr. Ananya Rao" className={field} /></label>
            <label className="flex flex-col gap-1.5"><span className="d-caption font-semibold text-ink-2">Mobile number (WhatsApp)</span><input name="phone" required type="tel" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} title="10-digit Indian mobile number" placeholder="98450 12345" autoComplete="tel-national" className={field} /></label>
            <label className="flex flex-col gap-1.5"><span className="d-caption font-semibold text-ink-2">Area or locality</span><input name="area" required placeholder="Indiranagar" className={field} /></label>
            <label className="flex flex-col gap-1.5"><span className="d-caption font-semibold text-ink-2">City</span><input name="city" required defaultValue="Bengaluru" className={field} /></label>
            <label className="flex flex-col gap-1.5"><span className="d-caption font-semibold text-ink-2">How many doctors?</span>
              <select name="doctors" defaultValue="1" className={field}>{["1", "2 to 5", "6 to 20", "More than 20"].map((o) => <option key={o}>{o}</option>)}</select>
            </label>
            <label className="flex flex-col gap-1.5"><span className="d-caption font-semibold text-ink-2">I am</span>
              <select name="role" defaultValue="A doctor who runs the clinic" className={field}>{["A doctor who runs the clinic", "A doctor working at a clinic", "Clinic manager or owner", "From a hospital or chain"].map((o) => <option key={o}>{o}</option>)}</select>
            </label>
            <label className="flex items-start gap-2.5 sm:col-span-2"><input type="checkbox" name="consent" required className="mt-1 size-4 accent-[var(--color-green)]" /><span className="d-caption text-ink-2">I agree that MedMate may contact me on WhatsApp or by phone about early access. See the <a href="/privacy" className="font-semibold text-green-700 underline">privacy notice</a>.</span></label>
            <button type="submit" className="press d-btn h-12 rounded-xl bg-green px-5 text-white hover:bg-green-700 sm:col-span-2">Get early access</button>
          </form>
        </section>

        {/* FAQ */}
        <section className="grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-10">
          <Heading eyebrow="Questions" title="Everything you might" accent="ask" lead="Anything else? Join early access and ask us on the call." />
          <Faq items={FAQS} />
        </section>
      </Container>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "MedMate Doctor",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Clinic management, e-prescription and billing",
        operatingSystem: "Web browser on desktop, tablet and phone",
        description: "Clinic software for India, coming soon: check-in and queue, vitals, a Doctor Console with prescription safety checks, signed FHIR e-prescriptions, GST billing, appointments, teleconsultation and reports, ready for ABDM.",
        url: `${SITE_URL}/clinic-software`,
        publisher: { "@id": `${SITE_URL}/#org` },
      }} />
    </main>
  );
}
