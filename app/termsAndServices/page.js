export const metadata = {
  title: "Terms of Service - PromptVerseAI",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>

      <p className="text-gray-600 mb-4">
        Welcome to PromptVerseAI. By accessing this website, you agree to
        comply with these terms of service.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        Use of Website
      </h2>

      <p className="text-gray-600 mb-4">
        PromptVerseAI provides AI prompts for informational and creative use.
        Users are free to copy and use prompts for personal or commercial
        projects.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        Restrictions
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>You may not scrape or copy the entire website</li>
        <li>You may not resell prompts as a competing service</li>
        <li>You may not misuse the website for illegal purposes</li>
      </ul>

      <h2 className="text-xl font-medium mt-6 mb-2">
        No User Accounts
      </h2>

      <p className="text-gray-600 mb-4">
        This website does not require user login or registration.
        All prompts are publicly accessible.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        No Guarantee
      </h2>

      <p className="text-gray-600 mb-4">
        We do not guarantee specific AI-generated results.
        Output depends on the AI tool used.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        Changes to Terms
      </h2>

      <p className="text-gray-600">
        We may update these terms at any time without prior notice.
        Continued use of the website means you accept the updated terms.
      </p>
    </div>
  );
}