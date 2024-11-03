export function HomeContactUs() {
  return (
    <section className="flex items-center justify-center py-12 lg:py-40">
      <div className="flex flex-col items-center justify-center max-w-3xl p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
        <p className="text-center mb-8">
          We'd love to hear from you! Reach out to us through LinkedIn or email.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/company/lecca-io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:support@lecca.io"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            support@lecca.io
          </a>
        </div>
      </div>
    </section>
  );
}
