import Image from "next/image";
import type { CSSProperties } from "react";
import {
  Bed,
  CalendarDays,
  ExternalLink,
  Fish,
  Heart,
  Images,
  MapPin,
  MessageCircle,
  Phone,
  Sun,
  Trees,
  Upload,
  UserRound,
  Utensils,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { siteConfig, type ScheduleIconName } from "../config/site";

export const dynamic = "force-static";

const iconMap = {
  bed: Bed,
  dinner: UtensilsCrossed,
  fish: Fish,
  sun: Sun,
  trees: Trees,
  utensils: Utensils,
} satisfies Record<ScheduleIconName, LucideIcon>;

function isExternalHref(href: string) {
  return href.startsWith("http");
}

function EventIcon({
  name,
  className = "",
}: {
  name: ScheduleIconName;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon aria-hidden="true" className={className} strokeWidth={1.7} />;
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      <h2 className="text-balance text-xl font-black uppercase tracking-[0.22em] text-[var(--ink)] sm:text-2xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-20 bg-[var(--border)]">
        <div className="mx-auto h-1 w-9 -translate-y-1/2 rounded-full bg-[var(--olive)]" />
      </div>
    </div>
  );
}

function LinkButton({
  href,
  label,
  variant = "light",
  icon: Icon = ExternalLink,
}: {
  href: string;
  label: string;
  variant?: "light" | "olive" | "outline";
  icon?: LucideIcon;
}) {
  const external = isExternalHref(href);
  const variants = {
    light:
      "border border-white/25 bg-[#5f6d42] text-white shadow-[0_10px_26px_rgba(0,0,0,0.18)] hover:bg-[#4e5b35]",
    olive:
      "bg-[var(--olive)] text-white shadow-[0_12px_28px_rgba(0,0,0,0.16)] hover:bg-[var(--olive-dark)]",
    outline:
      "border border-[var(--olive-dark)] bg-transparent text-[var(--olive-dark)] hover:bg-[rgba(97,113,71,0.09)]",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-7 py-3 text-sm font-black uppercase tracking-[0.15em] transition ${variants[variant]}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{label}</span>
      <Icon aria-hidden="true" className="size-4 shrink-0" strokeWidth={2.2} />
    </a>
  );
}

function HeaderNav() {
  return (
    <nav
      aria-label="Primary navigation"
      className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-[rgba(247,240,229,0.18)] backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-5xl justify-start overflow-x-auto px-4 py-4 sm:justify-center sm:px-6">
        <div className="flex min-w-max items-center gap-7 text-xs font-black uppercase tracking-[0.2em] text-[var(--ink)] sm:gap-10">
          {siteConfig.nav.map((item) => (
            <a
              className="border-b border-transparent pb-1 transition hover:border-[var(--ink)] hover:text-[var(--olive-dark)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [leftHeroImage, rightHeroImage] = siteConfig.hero.sideImages;

  return (
    <section
      className="relative isolate flex min-h-[720px] items-center overflow-hidden px-4 pb-12 pt-20 text-center sm:min-h-[720px] sm:px-6"
      id="home"
    >
      <Image
        alt="Fishing rods on a wooden dock beside a quiet lake"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fill
        priority
        sizes="100vw"
        src={siteConfig.hero.backgroundImage}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(247,240,229,0.72),rgba(247,240,229,0.58)_42%,rgba(247,240,229,0.32)_75%,rgba(247,240,229,0.88))]" />
      <HeaderNav />
      <div className="mx-auto mt-10 grid w-full max-w-7xl items-center gap-7 lg:grid-cols-[minmax(170px,290px)_minmax(0,1fr)_minmax(170px,290px)]">
        <figure className="order-2 mx-auto w-full max-w-64 overflow-hidden rounded-[2px] bg-[var(--paper-soft)] p-1 shadow-[0_18px_42px_rgba(27,24,18,0.22)] sm:max-w-72 lg:order-1">
          <div className="relative aspect-[4/5.2] overflow-hidden">
            <Image
              alt={leftHeroImage.alt}
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 290px, 45vw"
              src={leftHeroImage.src}
            />
          </div>
        </figure>
        <div className="order-1 mx-auto max-w-4xl lg:order-2">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[var(--ink)] sm:text-base">
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="font-display mt-4 text-[clamp(5rem,17vw,9.8rem)] leading-[0.82] tracking-normal text-[var(--ink)]">
            {siteConfig.hero.name}
          </h1>
          <p className="font-script mt-5 text-3xl leading-none text-[var(--ink)] sm:text-5xl">
            {siteConfig.hero.remembrance}
          </p>
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-4">
            <div className="h-px flex-1 bg-[rgba(16,29,45,0.2)]" />
            <Heart
              aria-hidden="true"
              className="size-5 fill-[var(--ink)] text-[var(--ink)]"
              strokeWidth={1.8}
            />
            <div className="h-px flex-1 bg-[rgba(16,29,45,0.2)]" />
          </div>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 text-sm font-black uppercase tracking-[0.04em] text-[var(--ink)] sm:flex-row sm:gap-6 sm:text-base">
            <span className="inline-flex items-center gap-2">
              <CalendarDays aria-hidden="true" className="size-5" />
              {siteConfig.hero.date}
            </span>
            <span className="hidden h-7 w-px bg-[rgba(16,29,45,0.25)] sm:block" />
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-5" />
              {siteConfig.hero.location}
            </span>
          </div>
          <p className="mx-auto mt-9 max-w-xl text-balance text-base leading-8 text-[var(--ink)] sm:text-lg">
            {siteConfig.hero.intro}
          </p>
        </div>
        <figure className="order-3 mx-auto w-full max-w-64 overflow-hidden rounded-[2px] bg-[var(--paper-soft)] p-1 shadow-[0_18px_42px_rgba(27,24,18,0.22)] sm:max-w-72">
          <div className="relative aspect-[4/5.2] overflow-hidden">
            <Image
              alt={rightHeroImage.alt}
              className={`object-cover ${rightHeroImage.imageClassName ?? ""}`}
              fill
              sizes="(min-width: 1024px) 290px, 45vw"
              src={rightHeroImage.src}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}

function Schedule() {
  const scheduleItems = [
    ...siteConfig.schedule.items,
    siteConfig.schedule.openDay,
  ] as const;

  return (
    <section
      className="paper-texture px-4 py-10 sm:px-6 sm:py-14"
      id="schedule"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={siteConfig.schedule.title} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {scheduleItems.map((item) => (
            <article
              className="rounded-md border border-[var(--border)] bg-white/40 px-5 py-7 text-center shadow-[0_12px_36px_rgba(67,53,36,0.06)] lg:rounded-none lg:border-y-0 lg:border-r-0 lg:border-l lg:bg-transparent lg:shadow-none lg:first:border-l-0"
              key={`${item.day}-${item.title}`}
            >
              <EventIcon
                className="mx-auto mb-5 size-12 text-[var(--olive-dark)] sm:size-14"
                name={item.icon}
              />
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[var(--ink)]">
                {item.day}
              </p>
              <h3 className="mt-3 text-xl font-black leading-tight text-[var(--olive-dark)]">
                {item.title}
              </h3>
              {"time" in item ? (
                <div className="mt-5 space-y-1 text-sm leading-6 text-[var(--ink)]">
                  {item.time ? <p className="font-bold">{item.time}</p> : null}
                  {item.place ? <p className="font-black">{item.place}</p> : null}
                  {item.location ? <p>{item.location}</p> : null}
                </div>
              ) : null}
              {item.description ? (
                <p className="mx-auto mt-4 max-w-60 text-sm leading-6 text-[rgba(16,29,45,0.82)]">
                  {item.description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionCards() {
  const googleFormFrameStyle = {
    "--google-form-mobile-height": `${siteConfig.rsvp.embed.mobileHeight}px`,
    "--google-form-desktop-height": `${siteConfig.rsvp.embed.desktopHeight}px`,
  } as CSSProperties;

  return (
    <section className="px-4 pb-8 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-5">
        <article
          className="relative isolate overflow-hidden rounded-lg bg-[var(--navy)] px-4 py-10 text-center text-white shadow-[0_20px_60px_rgba(47,37,24,0.14)] sm:px-8 lg:px-10"
          id={siteConfig.rsvp.id}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_95%_90%,rgba(255,255,255,0.18),transparent_13rem)]" />
          <h2 className="text-balance text-2xl font-black uppercase tracking-[0.1em]">
            {siteConfig.rsvp.title}
          </h2>
          <div className="mx-auto mt-5 h-1 w-11 bg-[var(--gold)]" />
          <p className="mx-auto mt-6 max-w-md leading-7 text-white/90">
            {siteConfig.rsvp.description}
          </p>
          <div className="mx-auto mt-8 w-full max-w-[760px] overflow-hidden rounded-lg border border-white/20 bg-[var(--paper-soft)] p-1 shadow-[0_18px_46px_rgba(0,0,0,0.22)] sm:p-2">
            <iframe
              className="google-form-frame block w-full rounded-md bg-white"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              src={siteConfig.rsvp.embed.src}
              style={googleFormFrameStyle}
              title={siteConfig.rsvp.embed.title}
            />
          </div>
          <p className="mt-5 text-sm text-white/80">{siteConfig.rsvp.helperText}</p>
        </article>
        <article
          className="relative isolate overflow-hidden rounded-lg bg-[var(--olive-dark)] px-6 py-10 text-center text-white shadow-[0_20px_60px_rgba(47,37,24,0.14)] sm:px-10"
          id={siteConfig.photos.id}
        >
          <Image
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 sepia"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={siteConfig.hero.backgroundImage}
          />
          <div className="absolute inset-0 -z-10 bg-[rgba(54,66,38,0.82)]" />
          <Images
            aria-hidden="true"
            className="mx-auto mb-4 size-8 text-white/70"
            strokeWidth={1.7}
          />
          <h2 className="text-balance text-2xl font-black uppercase tracking-[0.1em]">
            {siteConfig.photos.title}
          </h2>
          <div className="mx-auto mt-5 h-1 w-11 bg-[var(--gold)]" />
          <p className="mx-auto mt-6 max-w-md leading-7 text-white/90">
            {siteConfig.photos.description}
          </p>
          <div className="mt-8">
            <LinkButton
              href={siteConfig.photos.href}
              icon={Upload}
              label={siteConfig.photos.buttonLabel}
              variant="light"
            />
          </div>
          <p className="mt-5 text-sm text-white/80">
            {siteConfig.photos.helperText}
          </p>
        </article>
      </div>
    </section>
  );
}

function InfoCards() {
  return (
    <section className="px-4 pb-10 sm:px-6" id={siteConfig.travel.id}>
      <div className="mx-auto grid max-w-6xl gap-5">
        <article className="rounded-lg border border-[var(--border)] bg-white/40 px-6 py-8 shadow-[0_16px_46px_rgba(67,53,36,0.07)] sm:px-10">
          <div className="flex items-start gap-5">
            <EventIcon
              className="mt-1 size-9 shrink-0 text-[var(--olive-dark)]"
              name={siteConfig.travel.icon}
            />
            <div>
              <h2 className="text-xl font-black uppercase tracking-[0.04em]">
                {siteConfig.travel.title}
              </h2>
              <p className="mt-5 max-w-md leading-7 text-[rgba(16,29,45,0.82)]">
                {siteConfig.travel.description}
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {siteConfig.travel.hotels.map((hotel) => (
              <article
                className="flex h-full flex-col rounded-md border border-[var(--border)] bg-[rgba(251,247,239,0.68)] p-5 text-left"
                key={hotel.name}
              >
                <h3 className="text-lg font-black leading-tight text-[var(--olive-dark)]">
                  {hotel.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[rgba(16,29,45,0.82)]">
                  {hotel.address}
                </p>
                <div className="mt-4 space-y-2 text-sm font-bold text-[var(--ink)]">
                  <p>{hotel.rate}</p>
                  <p>{hotel.distance}</p>
                </div>
                <p className="mt-4 flex-1 text-sm leading-6 text-[rgba(16,29,45,0.78)]">
                  {hotel.description}
                </p>
                <div className="mt-6">
                  <LinkButton
                    href={hotel.bookingHref}
                    label={hotel.bookingLabel}
                    variant="outline"
                  />
                </div>
              </article>
            ))}
          </div>
        </article>
        <article
          className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-white/40 px-6 py-8 shadow-[0_16px_46px_rgba(67,53,36,0.07)] sm:px-10"
          id={siteConfig.contact.id}
        >
          <div className="grid gap-8 md:grid-cols-[1fr_210px] md:items-center">
            <div className="flex items-start gap-5">
              <UserRound
                aria-hidden="true"
                className="mt-1 size-9 shrink-0 fill-[rgba(97,113,71,0.2)] text-[var(--olive)]"
                strokeWidth={1.7}
              />
              <div>
                <h2 className="text-xl font-black uppercase tracking-[0.04em]">
                  {siteConfig.contact.title}
                </h2>
                <p className="mt-5 max-w-md leading-7 text-[rgba(16,29,45,0.82)]">
                  {siteConfig.contact.description}
                </p>
                <div className="mt-8 space-y-4 text-base font-black">
                  <a
                    className="flex items-center gap-4 transition hover:text-[var(--olive-dark)]"
                    href={siteConfig.contact.phoneHref}
                  >
                    <Phone
                      aria-hidden="true"
                      className="size-5 text-[var(--olive)]"
                    />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                  <a
                    className="flex items-center gap-4 transition hover:text-[var(--olive-dark)]"
                    href={siteConfig.contact.phoneHref}
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="size-5 text-[var(--olive)]"
                    />
                    <span>{siteConfig.contact.textLabel}</span>
                  </a>
                </div>
              </div>
            </div>
            <figure className="mx-auto w-48 rotate-3 rounded-[3px] bg-[#f6ebd9] p-3 pb-6 shadow-[0_16px_28px_rgba(47,37,24,0.22)] md:mx-0 md:w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-[var(--border)]">
                <Image
                  alt={siteConfig.contact.photo.alt}
                  className="h-full w-full object-cover"
                  fill
                  sizes="210px"
                  src={siteConfig.contact.photo.src}
                />
              </div>
              <figcaption className="font-script mt-3 flex items-center justify-center gap-2 text-center text-lg text-[var(--ink)]">
                {siteConfig.contact.photo.caption}
                <Heart aria-hidden="true" className="size-4" strokeWidth={1.6} />
              </figcaption>
            </figure>
          </div>
        </article>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="px-4 pb-12 sm:px-6" id={siteConfig.faq.id}>
      <div className="mx-auto max-w-6xl rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.28)] px-6 py-8 sm:px-10">
        <SectionHeading title={siteConfig.faq.title} />
        <div className="grid gap-5 md:grid-cols-3">
          {siteConfig.faq.items.map((item) => (
            <article key={item.question}>
              <h3 className="text-base font-black text-[var(--olive-dark)]">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[rgba(16,29,45,0.78)]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden px-4 pb-8 pt-3 text-center sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(97,113,71,0.08))]" />
      <Heart
        aria-hidden="true"
        className="mx-auto size-8 text-[var(--ink)]"
        strokeWidth={1.5}
      />
      <p className="font-script mt-3 text-balance text-2xl leading-snug text-[var(--ink)] sm:text-4xl">
        {siteConfig.footer.line}
      </p>
      <p className="mt-3 text-base text-[rgba(16,29,45,0.86)]">
        {siteConfig.footer.note}
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Schedule />
      <ActionCards />
      <InfoCards />
      <Faq />
      <Footer />
    </main>
  );
}
