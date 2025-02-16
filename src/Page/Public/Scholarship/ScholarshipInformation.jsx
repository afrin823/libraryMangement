import { useEffect, useRef, useState } from "react";
const inputStyle = "border-b-2 border-dotted border-gray-800 w-96";
const gardianInput = "border-b-2 border-dotted border-gray-800 w-40 ml-2";
const gridInput = "border-b-2 border-dotted border-gray-800 w-32";
const bankInput = "border-b-2 border-dotted border-gray-800 w-40"

const ScholarshipInformation = () => {
  const [formData, setFormData] = useState(null);
  const formRef = useRef(null); // Create a reference for the form

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scholarshipData"));
    if (data) {
      setFormData(data);
    }
  }, []);

  const handlePrint = () => {
    const printContents = formRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents; 
    window.print();
    document.body.innerHTML = originalContents; 
    window.location.reload(); 
  };

  if (!formData) {
    return <div>Loading...</div>; 
  }
  return (
    <div>
      <div ref={formRef} className="max-w-5xl mx-auto p-8 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-1">শিক্ষা সহায়তা বৃত্তি</h1>
          <p className="text-sm mb-1">শফিক উদ্দিন স্মৃতি বৃত্তি কর্তৃপক্ষ</p>
          <p className="text-sm">গজারিয়া, ভৈরব, কিশোরগঞ্জ</p>
        </div>

        <div className="text-center font-semibold text-lg mb-6 underline">আবেদনপত্র</div>

        <div className="relative mb-8">
          <div className="absolute right-0 top-0 border border-gray-400 w-32 h-40 flex items-center justify-center text-gray-400">
            {formData.profilePicture && (
              <div className="flex gap-2">
                <div className="flex justify-center mb-4">
                  <img
                    src={formData.profilePicture}
                    alt="Uploaded Image"
                    className="w-full h-full object-cover mt-2"
                  />
                </div>
              </div>
            )}
          </div>
        </div>




        <form className="space-y-4">
          <div className="flex gap-2">
            <span className="w-6">১।</span>
            <div className="flex-1">
              <label className="inline">নাম</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.name} readOnly className="border-b-2 border-dotted border-gray-800 focus:outline-none w-96" />

            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="w-4 flex-shrink-0">২।</span>
            <div className="flex-1">
              <label className="inline-block">পিতার নাম</label>
              <span className="mx-2">:</span>
              <input
                type="text"
                value={formData.fatherName}
                readOnly
                className={`${inputStyle} w-full sm:w-auto`}
              />
              <span className="ml-2">পেশা</span>
              <input
                type="text"
                value={formData.fatherOccupation}
                readOnly
                className={`${gardianInput} w-full sm:w-auto mt-2 sm:mt-0`}
              />
            </div>
          </div>


          <div className="flex flex-wrap gap-2 items-center">
            <span className="w-4 flex-shrink-0">৩।</span>
            <div className="flex-1">
              <label className="inline-block">মাতার নাম</label>
              <span className="mx-2">:</span>
              <input
                type="text"
                value={formData.motherName}
                readOnly
                className={`${inputStyle} w-full sm:w-auto`}
              />
              <span className="ml-2">পেশা</span>
              <input
                type="text"
                value={formData.motherOccupation}
                readOnly
                className={`${gardianInput} w-full sm:w-auto mt-2 sm:mt-0`}
              />
            </div>
          </div>


          <div className="flex gap-2">
            <span className="w-6">৪।</span>
            <div className="flex-1 space-y-2">
              <div>
                <label className="inline">ঠিকানা</label>
                <span className="mx-2">:</span>
                <span className="mr-2">স্থায়ী</span>
                <input type="text" value={formData.permanentCity}
                  readOnly className={inputStyle} />
              </div>
              <div className="ml-14">
                <span className="mr-2">বর্তমান</span>
                <input type="text" value={formData.currentCity}
                  readOnly className={inputStyle} />
              </div>
              <div className="ml-14">
                <span className="mr-2">মোবাইল নং</span>
                <input type="text" value={formData.mobile}
                  readOnly className={inputStyle} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="w-6 flex-shrink-0">৫।</span>
            <div className="flex-1">
              <label className="inline-block">অভিভাবকের নাম</label>
              <span className="mx-2">:</span>
              <input
                type="text"
                value={formData.guardianName}
                readOnly
                className={`${inputStyle} w-full sm:w-auto`}
              />
              <span className="ml-2">সম্পর্ক</span>
              <input
                type="text"
                value={formData.relationship}
                readOnly
                className={`${gardianInput} w-full sm:w-auto mt-2 sm:mt-0`}
              />
            </div>
          </div>


          <div className="flex gap-2">
            <span className="w-6">৬।</span>
            <div className="flex-1">
              <label className="inline">বর্তমান শ্রেণী</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.currentClass}
                readOnly className={inputStyle} />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">৭।</span>
            <div className="flex-1">
              <label className="inline">শিক্ষা প্রতিষ্ঠানের নাম</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.institution}
                readOnly className={inputStyle} />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">৮।</span>
            <div className="flex-1">
              <label className="inline">উচ্চ মাধ্যমিক পরীক্ষার ফলাফল</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.higherSecondaryYear}
                readOnly className={gridInput} placeholder="পাশের বছর" />
              <span className="mx-2">প্রাপ্ত গ্রেড</span>
              <input type="text" value={formData.higherSecondaryGrade}
                readOnly className={gridInput} placeholder="(পয়েন্টসহ)" />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">৯।</span>
            <div className="flex-1">
              <label className="inline">মাধ্যমিক পরীক্ষার ফলাফল</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.higherSecondaryYear}
                readOnly className={gridInput} placeholder="পাশের বছর" />
              <span className="mx-2">প্রাপ্ত গ্রেড</span>
              <input type="text" value={formData.secondaryResult}
                readOnly className={gridInput} placeholder="(পয়েন্টসহ)" />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">১০।</span>
            <div className="flex-1">
              <label className="inline">অষ্টম শ্রেণীর পরীক্ষার ফলাফল</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.eightYear}
                readOnly className={gridInput} placeholder="পাশের বছর" />
              <span className="mx-2">প্রাপ্ত গ্রেড</span>
              <input type="text" value={formData.eightResult}
                readOnly className={gridInput} placeholder="(পয়েন্টসহ)" />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">১১।</span>
            <div className="flex-1">
              <label className="inline">নবম শ্রেণীতে ভর্তির নম্বর</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.nightResult}
                readOnly className={gridInput} />
              <span className="mx-2">অষ্টম শ্রেণীতে ভর্তির নম্বর</span>
              <input type="text" value={formData.nightResult}
                readOnly className={gridInput} />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">১২।</span>
            <div className="flex-1">
              <label className="inline">পঞ্চম শ্রেণীর পরীক্ষার ফলাফল</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.fiveResult}
                readOnly className={gridInput} placeholder="পাশের বছর" />
              <span className="mx-2">প্রাপ্ত গ্রেড</span>
              <input type="text" value={formData.fifthGrade}
                readOnly className={gridInput} placeholder="(পয়েন্টসহ)" />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">১৩।</span>
            <div className="flex-1">
              <label className="inline">পরিবারের সদস্য সংখ্যা</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.brothers}
                readOnly className={gridInput} placeholder="ভাই" />
              <span className="mx-2">বোন</span>
              <input type="text" value={formData.sisters}
                readOnly className={gridInput} />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">১৪।</span>
            <div className="flex-1">
              <label className="inline">অধ্যয়নরত ভাই-বোনের সংখ্যা</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.studyingBrother}
                readOnly className={gridInput} placeholder="ভাই" />
              <span className="mx-2">বোন</span>
              <input type="text" value={formData.studyingSister}
                readOnly className={gridInput} />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">১৫।</span>
            <div className="flex-1">
              <label className="inline">পরিবারের উপার্জনরত ব্যক্তির সংখ্যা</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.earningMember}
                readOnly className={inputStyle} />
              <span className="ml-2">উপার্জনরত ব্যক্তিগণের সাথে আবেদনকারীর সম্পর্ক</span>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">১৬।</span>
            <div className="flex-1">
              <label className="inline">পারিবারিক মাসিক আয়</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.monthlyIncome}
                readOnly className={inputStyle} placeholder="টাকা" />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">১৭।</span>
            <div className="flex-1">
              <label className="inline">চাষযোগ্য জমির পরিমাণ</label>
              <span className="mx-2">:</span>
              <input value={formData.amountCultivable}
                readOnly type="text" className={inputStyle} />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">১৮।</span>
            <div className="flex-1">
              <label className="inline">সুপারিশ (অধ্যক্ষের শিক্ষা প্রতিষ্ঠানের প্রধান বিবেচ্য সুপারিশ)</label>
              <span className="mx-2">:</span>
              <input type="text" value={formData.Recommendation}
                readOnly className={inputStyle} />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="w-6">১৯।</span>
            <div className="flex-1">
              <label className="inline">মূল ব্যাংক হিসাব নম্বর</label>
              <span className="mx-2">:</span>
              <span className="mr-2">নাম</span>
              <input type="text" value={formData.schoolBankName}
                readOnly className={bankInput} />
              <span className="mx-2">নম্বর</span>
              <input type="text" value={formData.accountNumber}
                readOnly className={bankInput} />
              <span className="mx-2">ব্যাংকের নাম</span>
              <input type="text" value={formData.bankName}
                readOnly className={bankInput} />
              <div className="mt-2 ml-14">
                <span className="mr-2">শাখা</span>
                <input type="text" value={formData.branch}
                  readOnly className={inputStyle} />
              </div>
            </div>
          </div>
          {/* Signatures */}
          <div className="flex justify-between mt-8 pt-8">
            <div>
              <input
                id="guardianSignature"
                type="text"
                value={formData.guardianSignature}
                readOnly
                className="w-full p-2 focus:outline-none"
              />
              <div className="border-t border-black">অভিভাবকের স্বাক্ষর</div>
            </div>
            <div>
              <input
                id="guardianSignature"
                value={formData.applicantSignature}
                readOnly
                className="w-full p-2 focus:outline-none"
              />
              <div className="border-t border-black">আবেদনকারীর স্বাক্ষর ও তারিখ</div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8">
            <p className="font-semibold mb-2">সংযুক্ত কাগজপত্রাদি (আবেদনপত্রের সাথে অবশ্যই জমা দিতে হবে):</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>পরীক্ষায় উত্তীর্ণ হওয়ার নম্বরপত্র।</li>
              <li>পরিবারের মাসিক/বাৎসরিক সকল ধরনের আয়ের বিবরণ।</li>
              <li>জীবনের লক্ষ্য সম্পর্কে এক পাতায় বিবরণ।</li>
            </ol>
          </div>
        </form>

      </div>
      {/* Print Button */}
      <div className="max-w-4xl mx-auto text-center mb-6">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-primary text-natural font-semibol"
        >
          প্রিন্ট করুন
        </button>
      </div>
    </div>

  )
}

export default ScholarshipInformation;