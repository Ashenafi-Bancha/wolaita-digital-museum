
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import mountDamotaImage from "../../assets/Mount_Damot.png";
import { SITE_URL } from "../config/site";

const stats = [
  { value: "50+", labelKey: "home.mightyKings" as const },
  { value: "500+", labelKey: "home.yearsHistory" as const },
  { value: "27", labelKey: "home.statsPages" as const },
];

const Home = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const highlights = [
    {
      title: t("home.kingsHighlight"),
      excerpt: t("home.kingsExcerpt"),
      image:
        "https://images.unsplash.com/photo-1708512935636-36a3dba7cfc4?w=600&h=400&fit=crop&auto=format",
      link: "/kings",
      badge: "Royal lineage",
    },
    {
      title: t("home.languageHighlight"),
      excerpt: t("home.languageExcerpt"),
      image:
        "https://images.unsplash.com/photo-1576073383046-eaf2c135314d?w=600&h=400&fit=crop&auto=format",
      link: "/language",
      badge: "Living language",
    },
    {
      title: t("home.foodHighlight"),
      excerpt: t("home.foodExcerpt"),
      image:
        "https://images.unsplash.com/photo-1770562325764-694b655db57e?w=600&h=400&fit=crop&auto=format",
      link: "/food",
      badge: "Cuisine heritage",
    },
  ];

  const quickLinks = [
    { label: t("home.marccuwaaLabel"), path: "/marccuwaa" },
    { label: t("home.calendarLabel"), path: "/calendar" },
    { label: t("home.heritageSitesLabel"), path: "/heritage-sites" },
    { label: t("home.lifeCeremoniesLabel"), path: "/life-ceremonies" },
  ];

  const exploreLinks = [
    { label: t("nav.gifaataa"), path: "/gifaataa" },
    { label: t("nav.dingguza"), path: "/dingguza" },
    { label: t("nav.history"), path: "/history" },
    { label: t("nav.kings"), path: "/kings" },
    { label: t("nav.music"), path: "/music" },
    { label: t("nav.food"), path: "/food" },
    { label: t("language.title"), path: "/language" },
    { label: t("heritage.title"), path: "/heritage-sites" },
    { label: t("nav.gallery"), path: "/gallery" },
    { label: t("visit.title"), path: "/tourism" },
    { label: t("nav.culture"), path: "/culture" },
    { label: t("nav.quiz"), path: "/quiz" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: t("home.museumTitle"),
        url: SITE_URL,
        description: t("home.seoDescription"),
        inLanguage: ["en", "am", "wal"],
      },
      {
        "@type": "Museum",
        name: t("home.museumTitle"),
        description: t("home.seoDescription"),
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          addressRegion: "Wolaita",
          addressCountry: "ET",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{t("home.museumTitle")} | Heritage, History &amp; Culture</title>
        <meta name="description" content={t("home.seoDescription")} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content={t("home.museumTitle")} />
        <meta property="og:description" content={t("home.seoDescription")} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("home.museumTitle")} />
        <meta name="twitter:description" content={t("home.seoDescription")} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0">
          <img
            src={mountDamotaImage}
            alt="Mount Damota highlands in Wolaita, Southern Ethiopia"
            className="absolute inset-0 h-full w-full scale-105 object-cover object-center animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/85 via-stone-950/55 to-stone-950/92" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-stone-950/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-32 text-center sm:px-6 lg:pb-24 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="badge-wolaita mx-auto mb-8">
              <MapPin size={14} className="shrink-0 text-[rgb(var(--wolaita-gold))]" />
              <span>{t("home.heroLocation")}</span>
            </div>

            <h1 className="mx-auto max-w-4xl font-serif text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block wolaita-display-gradient wolaita-hero-premium">
                {t("home.museumTitle")}
              </span>
              <span className="mt-4 block text-2xl font-bold uppercase tracking-[0.18em] text-white/75 sm:text-3xl lg:text-4xl">
                {t("home.visitLandOf")}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
            >
              {t("home.subtitle")}
            </motion.p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/history" className="btn-wolaita-primary group w-full sm:w-auto">
                {t("home.cta")}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/tourism" className="btn-wolaita-secondary w-full sm:w-auto">
                {t("home.planVisit")}
              </Link>
            </div>

            <div className="surface-3d mx-auto mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border-white/12 bg-black/30 text-white">
              {stats.map((stat) => (
                <div
                  key={stat.labelKey}
                  className="border-r border-white/10 px-4 py-5 last:border-r-0"
                >
                  <div className="font-serif text-2xl font-black text-[rgb(var(--wolaita-gold))] sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[0.68rem] font-bold uppercase tracking-wider text-white/55">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, 8, 0] }}
          transition={
            shouldReduceMotion
              ? { duration: 0.2 }
              : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
          }
          className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 sm:flex"
        >
          <div className="h-8 w-px rounded-full bg-white/30" />
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
        </motion.div>

        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* Proverb */}
      <section className="relative overflow-hidden bg-stone-950 py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="badge-wolaita mx-auto mb-8 border-white/10 bg-white/5 text-[rgb(var(--wolaita-gold))]">
              {t("home.proverbLabel")}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { text: t("home.proverbEn"), lang: "English" },
                { text: t("home.proverbWo"), lang: "Wolaitigna" },
                { text: t("home.proverbAm"), lang: "አማርኛ" },
              ].map((item, i) => (
                <motion.div
                  key={item.lang}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="surface-3d rounded-2xl p-6 text-left"
                >
                  <div className="card-accent-bar mb-4" />
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/55">
                    {item.lang}
                  </p>
                  <p className="text-sm leading-relaxed text-white/85 italic">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gifaataa & Dingguza */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-950 via-stone-950 to-stone-900 py-24 px-6">
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
              {t("home.prideTitle")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/65">{t("home.prideSubtitle")}</p>
          </motion.div>

          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/gifaataa" className="block h-full">
                <div className="pillar-card pillar-card-gifaataa h-full p-8 md:p-10">
                  <div className="pillar-card-glow" aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="card-accent-bar mb-6" />
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="badge-wolaita text-[0.65rem]">{t("home.annualFestival")}</span>
                      <span className="badge-wolaita text-[0.65rem]">{t("home.globalRecognition")}</span>
                    </div>
                    <h3 className="pillar-title-gifaataa mb-3">Gifaataa</h3>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/45">
                      {t("gifaataa.subtitle")}
                    </p>
                    <p className="mb-2 font-serif text-lg italic text-[rgb(var(--wolaita-gold))]/80">
                      Yooyo Gifaataa!
                    </p>
                    <p className="mb-8 text-sm leading-relaxed text-stone-300 md:text-base">
                      {t("home.gifaataaCardDesc")}
                    </p>
                    <div className="flex items-center gap-2 font-semibold text-[rgb(var(--wolaita-gold))] transition-all group-hover:gap-4">
                      {t("home.exploreGifaataa")}
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="group"
            >
              <Link to="/dingguza" className="block h-full">
                <div className="pillar-card pillar-card-dingguza h-full p-8 md:p-10">
                  <div className="pillar-card-glow" aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="card-accent-bar mb-6" />
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="badge-wolaita text-[0.65rem]">{t("home.handwoven")}</span>
                      <span className="badge-wolaita text-[0.65rem]">{t("home.culturalSymbol")}</span>
                    </div>
                    <h3 className="pillar-title-dingguza mb-3">Dingguza</h3>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/45">
                      {t("dingguza.subtitle")}
                    </p>
                    <p className="mb-8 text-sm leading-relaxed text-stone-300 md:text-base">
                      {t("home.dingguuzaCardDesc")}
                    </p>
                    <div className="flex items-center gap-2 font-semibold text-[rgb(var(--wolaita-gold))] transition-all group-hover:gap-4">
                      {t("home.exploreDingguza")}
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/45">
              {t("home.alsoDiscover")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="badge-wolaita transition-colors hover:bg-white/15"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Civilization highlights */}
      <section className="bg-stone-50 py-24 px-6 dark:bg-stone-950">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="card-accent-bar mx-auto mb-6" />
            <h2 className="mb-4 font-serif text-3xl font-bold text-stone-900 dark:text-stone-50 md:text-5xl">
              {t("home.civilizationTitle")}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
              {t("home.civilizationDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="group"
              >
                <Link to={item.link} className="block">
                  <div className="surface-3d overflow-hidden rounded-2xl bg-white dark:bg-stone-900">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="badge-wolaita absolute left-4 top-4 text-[0.6rem]">
                        {item.badge}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 font-serif text-xl font-bold text-stone-900 dark:text-stone-50">
                        {item.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-[rgb(var(--wolaita-forest))] transition-all group-hover:gap-2 dark:text-[rgb(var(--wolaita-gold))]">
                        {t("common.readMore")} <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore grid */}
      <section className="bg-stone-100 py-20 px-6 dark:bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-2 font-serif text-3xl font-bold text-stone-900 dark:text-stone-50">
              {t("common.explore")} Wolaita
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              {t("home.trilingualTagline")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {exploreLinks.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <Link to={item.path} className="explore-link">
                  <span className="card-accent-bar" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-stone-600 dark:text-stone-300">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-20 px-6">
        <div className="section-divider absolute left-0 right-0 top-0" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
              {t("home.museumTitle")}
            </h2>
            <p className="mb-10 text-lg text-white/60">{t("home.finalCtaDesc")}</p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/quiz" className="btn-wolaita-primary group w-full sm:w-auto">
                {t("home.takeQuiz")}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-wolaita-secondary w-full sm:w-auto">
                {t("nav.contact")} <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>
    </>
  );
};

export default Home;
