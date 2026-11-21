import Link from "next/link";
import { Container, Icon } from "@/components/ui";
import { pageMeta } from "@/lib/site";

export const metadata = { ...pageMeta({ title: "Thanks for joining MedMate Doctor early access", description: "We will contact you before MedMate Doctor launches.", path: "/clinic-software/thanks" }), robots: { index: false, follow: true } };

export default function Thanks() {
  return (
    <main>
      <Container className="flex flex-col items-center gap-5 py-24 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-mint-100 text-green-700"><Icon name="check" size={32} /></span>
        <h1 className="d-h1">Thanks, your clinic is on the <span className="text-green">list</span></h1>
        <p className="d-lead max-w-[560px] text-ink-2">We will message you on WhatsApp before MedMate Doctor launches, to show you the software and set up your clinic. Keep your clinic registration number and your HPR ID handy.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/pharmacy-partner" className="press d-btn inline-flex h-12 items-center rounded-xl bg-green px-5 text-white hover:bg-green-700">See the Partner console</Link>
          <Link href="/" className="press d-btn inline-flex h-12 items-center rounded-xl border-[1.5px] border-green px-5 text-green hover:bg-mint-50">Back to home</Link>
        </div>
      </Container>
    </main>
  );
}
