export const metadata = {
  title: "Contact Support - PromptVerseAI",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">Contact Support</h1>

      <p className="text-gray-600 mb-4">
        If you have any questions, suggestions, or issues, feel free to contact us.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        General Support
      </h2>

      <p className="text-gray-600 mb-4">
        Need help with prompts or found a bug? Reach out and we'll fix it.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        Business & Collaboration
      </h2>

      <p className="text-gray-600 mb-4">
        For partnerships, advertising, or collaboration inquiries, contact us below.
      </p>

      <div className="bg-gray-50 border rounded-lg p-4 mt-6">
        <p className="text-gray-700">
          Email: <span className="font-medium">abhaypanditzx@gmail.com</span>
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Response time: 24–48 hours
        </p>
      </div>
    </div>
  );
}