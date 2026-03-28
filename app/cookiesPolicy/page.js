export const metadata = {
  title: "Cookie Policy - PromptVerseAI",
};

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">Cookie Policy</h1>

      <p className="text-gray-600 mb-4">
        This Cookie Policy explains how PromptVerseAI uses cookies and similar
        technologies to improve user experience.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        What Are Cookies
      </h2>

      <p className="text-gray-600 mb-4">
        Cookies are small text files stored on your device when you visit
        a website. They help websites remember user preferences and improve
        functionality.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        How We Use Cookies
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
        <li>To understand how users interact with the website</li>
        <li>To improve performance and experience</li>
        <li>To serve advertisements (Google AdSense)</li>
      </ul>

      <h2 className="text-xl font-medium mt-6 mb-2">
        Third-Party Cookies
      </h2>

      <p className="text-gray-600 mb-4">
        We may use third-party services like Google AdSense that use cookies
        to display relevant ads to users.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        Managing Cookies
      </h2>

      <p className="text-gray-600">
        You can choose to disable cookies through your browser settings.
        Disabling cookies may affect some features of the website.
      </p>
    </div>
  );
}