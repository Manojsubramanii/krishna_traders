import { X } from "lucide-react";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
};

const QuoteModal = ({ open, onClose }: QuoteModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all
      ${open ? "bg-black/60 opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div className="w-full max-w-2xl max-h-[90vh] rounded-xl shadow-2xl bg-white overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Request Quote</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          <form
            action="https://crm.zoho.in/crm/WebToLeadForm"
            method="POST"
            acceptCharset="UTF-8"
          >
            {/* Zoho hidden fields */}
            <input type="hidden" name="xnQsjsdp" value="fb636fff99a037a3a5b0786104754ac712cc053e78d487f3d260882513c84b78" />
            <input type="hidden" name="zc_gad" value="" />
            <input type="hidden" name="xmIwtLD" value="4cec259123bd0a3b769cf0ada51e5fcd17c521276ede6f92bcbe45c1ee13c0e3356aae110d80f85be0ada8ceb1bdcedc" />
            <input type="hidden" name="actionType" value="TGVhZHM=" />
            <input type="hidden" name="returnURL" value="null" />

            {/* Fields */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Company / Firm Name *</label>
              <input type="text" name="Company" required className="w-full border rounded-lg px-3 py-2" />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Contact Person Name *</label>
              <input type="text" name="Last Name" required className="w-full border rounded-lg px-3 py-2" />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Email Address *</label>
              <input type="email" name="Email" required className="w-full border rounded-lg px-3 py-2" />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Phone Number *</label>
              <input type="text" name="Phone" required className="w-full border rounded-lg px-3 py-2" />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Country *</label>
              <input type="text" name="Country" required className="w-full border rounded-lg px-3 py-2" />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-1">Get a Quote / Requirement Details *</label>
              <textarea name="Description" required rows={4} className="w-full border rounded-lg px-3 py-2" />
            </div>

            <div className="flex gap-4">
              <button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold">
                Submit Request
              </button>
              <button type="button" onClick={onClose} className="text-gray-600 font-medium">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
