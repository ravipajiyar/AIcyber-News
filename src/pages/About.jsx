import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Bot,
  GraduationCap,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const pillars = [
  {
    icon: Scale,
    title: "Cyber Law Guidance",
    description:
      "Clear explanations of Nepal's Electronic Transactions Act, data protection duties and the legal steps that follow a cyber incident.",
    color: "text-purple-300",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Practical Security",
    description:
      "Hands-on advice for individuals, businesses and institutions on prevention, detection and response to digital threats.",
    color: "text-teal-300",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
  {
    icon: Bot,
    title: "AI & Emerging Tech",
    description:
      "Research and guidance on how artificial intelligence changes both the attack surface and the legal response.",
    color: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: GraduationCap,
    title: "Awareness & Training",
    description:
      "Workshops, resources and public education that help people recognise scams and respond responsibly.",
    color: "text-amber-300",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
];

const values = [
  {
    icon: Users,
    title: "People first",
    text: "Legal and technical advice is written for the person affected, not for other experts.",
  },
  {
    icon: BookOpen,
    title: "Evidence based",
    text: "We cite the law, the regulation and the verified incident data behind every recommendation.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy respected",
    text: "Incident details are handled with care and shared only with the people who can help.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <Navbar />

      <main id="top" className="overflow-hidden">
        <section className="relative isolate px-4 pb-20 pt-36 sm:pt-40">
          <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-10" />
          <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute right-0 top-40 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="container mx-auto max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-sm font-medium text-teal-300"
            >
              <ShieldCheck className="h-4 w-4" />
              About AI Cyber Law
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            >
              Making Nepal&apos;s digital world{" "}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                safer and clearer
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
            >
              We connect cybersecurity practice with legal understanding, so
              people and organisations in Nepal know what happened, what the law
              says, and what to do next.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-gray-950 transition-colors hover:bg-teal-400"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#report-incident"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-semibold text-gray-200 transition-colors hover:border-teal-400/50 hover:text-teal-300"
              >
                Report an incident
              </a>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-gray-800/70 bg-gray-900/40 px-4 py-16">
          <div className="container mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Why we exist
              </h2>
              <div className="mt-5 space-y-4 text-gray-400">
                <p>
                  Nepal&apos;s digital economy is growing faster than public
                  understanding of the risks. A single phishing message can cost
                  a family its savings, and many victims do not know which law
                  applies or where to report.
                </p>
                <p>
                  AI Cyber Law was built to close that gap. We translate
                  technical incidents into plain language, explain the legal
                  options under Nepali law, and point people to the right
                  authority without judgement.
                </p>
                <p>
                  Our work is independent, educational and focused on practical
                  outcomes: fewer successful attacks, faster reporting and
                  better evidence.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Incidents guided" },
                { value: "24h", label: "Typical response" },
                { value: "10+", label: "Partner resources" },
                { value: "100%", label: "Free public guidance" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-800 bg-gray-900/70 p-6 text-center"
                >
                  <div className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                What we do
              </h2>
              <p className="mt-4 text-gray-400">
                Four connected areas, one goal: helping people act with
                confidence when technology and the law meet.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className={`rounded-2xl border ${pillar.border} ${pillar.bg} p-6 transition-transform duration-300 hover:-translate-y-1`}
                >
                  <div
                    className={`inline-flex rounded-lg bg-gray-950/40 p-3 ${pillar.color}`}
                  >
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-300">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-800/70 bg-gray-900/40 px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              How we work
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-gray-800 bg-gray-950/60 p-6"
                >
                  <value.icon className="h-6 w-6 text-teal-300" />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl rounded-2xl border border-teal-400/20 bg-gradient-to-br from-teal-500/10 via-gray-900 to-blue-500/10 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold text-white">
              Need guidance right now?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-300">
              If you are dealing with a cyber incident, do not wait for it to
              escalate. Preserve the evidence, report it, and ask for help.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/#report-incident"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-600"
              >
                Report an incident
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-200 transition-colors hover:border-teal-400 hover:text-teal-300"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
