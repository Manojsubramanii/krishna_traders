import { useEffect, useState } from "react";
import { X } from "lucide-react";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
  defaultProduct?: string | null;
};

const countries = [
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼" },
  { name: "Nepal", code: "+977", flag: "🇳🇵" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Oman", code: "+968", flag: "🇴🇲" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Other", code: "", flag: "🌍" },
];

const blockedEmailDomains = [
  "@example.com",
  "@test.com",
  "@demo.com",
  "@fake.com",
];

const QuoteModal = ({ open, onClose, defaultProduct }: QuoteModalProps) => {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [requirements, setRequirements] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open && defaultProduct) {
      setProduct(defaultProduct);
    }
  }, [open, defaultProduct]);

  if (!open) return null;

  /* ---------- Validation ---------- */
  const validate = () => {
    const e: Record<string, string> = {};
    if (!company.trim()) e.company = "Company name is required";
    if (!contact.trim()) e.contact = "Contact person is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "Enter a valid business email";
    }
    if (blockedEmailDomains.some(d => email.toLowerCase().endsWith(d))) {
      e.email = "Please use your official company email";
    }
    if (!countryName) e.country = "Please select a country";
    if (countryName === "Other" && !countryCode.trim()) {
      e.country = "Please enter your country code";
    }
    if (!/^[0-9]{7,15}$/.test(phone)) {
      e.phone = "Phone number must be 7–15 digits";
    }
    if (!product) e.product = "Please select a product";
    if (!quantity.trim()) e.quantity = "Please specify quantity";
    if (!requirements.trim()) e.requirements = "Please describe your requirement";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------- Submit ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b8494983-450b-473a-ac16-28423e677dca",
          subject: "New Get a Quote Lead",
          from_name: company,
          company,
          contact_person: contact,
          email,
          country: countryName,
          phone: `${countryCode}${phone}`,
          product,
          quantity,
          requirements,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error();
      alert(
        "Thank you! We will contact you shortly. For urgent enquiries, please reach us on WhatsApp."
      );
      onClose();
    } catch {
      alert("Submission failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl max-h-[75vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Request Quote</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">

          <input
            placeholder="Company *"
            value={company}
            onChange={e => setCompany(e.target.value)}
            className="w-full h-[44px] border rounded-lg px-4"
          />
          {errors.company && <p className="text-xs text-red-600">{errors.company}</p>}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                placeholder="Contact Person *"
                value={contact}
                onChange={e => setContact(e.target.value)}
                className="w-full h-[44px] border rounded-lg px-4"
              />
              {errors.contact && <p className="text-xs text-red-600">{errors.contact}</p>}
            </div>
            <div>
              <input
                placeholder="Email (name@company.com) *"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full h-[44px] border rounded-lg px-4"
              />
              {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Country + Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <select
                className="w-full h-[44px] border rounded-lg px-4 bg-white"
                onChange={e => {
                  const c = countries.find(x => x.name === e.target.value);
                  setCountryName(c?.name || "");
                  setCountryCode(c?.name === "Other" ? "" : c?.code || "");
                }}
              >
                <option value="">Select country *</option>
                {countries.map(c => (
                  <option key={c.name} value={c.name}>
                    {c.flag} {c.name} {c.code ? `(${c.code})` : ""}
                  </option>
                ))}
              </select>
              {errors.country && <p className="text-xs text-red-600">{errors.country}</p>}
            </div>
            <div className="flex gap-2">
              {countryName === "Other" ? (
                <input
                  placeholder="+1 *"
                  value={countryCode}
                  onChange={e => setCountryCode(e.target.value)}
                  className="w-20 h-[44px] border rounded-lg px-3 text-sm"
                />
              ) : (
                <div className="w-20 h-[44px] border rounded-lg px-3 bg-gray-50 flex items-center text-sm text-gray-500">
                  {countryCode || "Code"}
                </div>
              )}
              <div className="flex-1">
                <input
                  placeholder="Phone *"
                  value={phone}
                  onChange={e => setPhone(e.target.value.replace(/\D/g, ""))}
                  className="w-full h-[44px] border rounded-lg px-4"
                />
              </div>
            </div>
            {errors.phone && <p className="text-xs text-red-600 md:col-start-2">{errors.phone}</p>}
          </div>

          {/* Product + Quantity */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <select
                value={product}
                onChange={e => setProduct(e.target.value)}
                className="w-full h-[44px] border rounded-lg px-4 bg-white"
              >
                <option value="">Select product *</option>
                <optgroup label="🌾 Premium Rice">
                  <option>King Ponni Boiled Rice</option>
                  <option>Karnataka Ponni Boiled Rice</option>
                  <option>Raw Rice (Paccharisi)</option>
                  <option>Parboiled Ponni Rice</option>
                  <option>IR Rice (Idly Rice)</option>
                </optgroup>
                <optgroup label="🫘 Quality Dal">
                  <option>Urad Dal (Black Gram)</option>
                  <option>Toor Dal (Pigeon Pea)</option>
                  <option>Moong Dal (Green Gram)</option>
                  <option>Chana Dal (Bengal Gram)</option>
                </optgroup>
                <optgroup label="🌶️ Spices & Whole Spices">
                  <option>Cumin Seeds</option>
                  <option>Dried Red Chilli</option>
                  <option>Coriander Seeds</option>
                  <option>Black Pepper</option>
                  <option>Fenugreek Seeds</option>
                  <option>Cardamom</option>
                </optgroup>
                <optgroup label="🌱 Millets & Legumes">
                  <option>Black Chickpeas</option>
                  <option>White Chickpeas</option>
                  <option>Green Gram (Moong)</option>
                </optgroup>
                <optgroup label="🫙 Edible Oils">
                  <option>Sesame Oil</option>
                  <option>Groundnut Oil</option>
                  <option>Coconut Oil</option>
                  <option>Sunflower Oil</option>
                </optgroup>
              </select>
              {errors.product && <p className="text-xs text-red-600">{errors.product}</p>}
            </div>
            <div>
              <input
                placeholder="Quantity (e.g. 500 kg, 10 MT/month) *"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                className="w-full h-[44px] border rounded-lg px-4"
              />
              {errors.quantity && <p className="text-xs text-red-600">{errors.quantity}</p>}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Requirement Details *</label>
            <textarea
              rows={3}
              placeholder="Tell us about your requirement, quality standards, packaging, delivery timeline..."
              value={requirements}
              onChange={e => setRequirements(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
            />
            {errors.requirements && (
              <p className="text-xs text-red-600">{errors.requirements}</p>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border px-6 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;