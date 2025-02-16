import imageCompression from "browser-image-compression";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
const label = "block text-base font-medium text-primary";
const inputField = "w-full px-4 py-2 border border-gray-300 focus:outline-none";
const allInput = "mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm";

const ScholarshipForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [webpImage, setWebpImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        fileType: "image/webp",
      };
      try {
        const compressedFile = await imageCompression(file, options);
        const webpImageUrl = await imageCompression.getDataUrlFromFile(
          compressedFile
        );
        setWebpImage(webpImageUrl);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };

  const onSubmit = (data) => {
    const formData = { ...data, profilePicture: webpImage };

    localStorage.setItem("scholarshipData", JSON.stringify(formData)); // Save form data to localStorage
    navigate("/scholarship-information"); // Navigate to the ScholarshipInformation page

    localStorage.setItem("scholarshipData", JSON.stringify(formData));
    navigate("/scholarship-information");
  };

  let serial = 1;
  const addSerial = () => serial++;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="Name" className={label}>
              ({addSerial()}){t("scholarship:form_name")}
            </label>
            <input
              id="Name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={inputField}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="dob" className={label}>
              {t("scholarship:form_date_of_birth")}
            </label>
            <input
              id="dob"
              type="date"
              {...register("dob", { required: "Date of birth is required" })}
              className={inputField}
            />
            {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fatherName" className={label}>
              ({addSerial()}){t("scholarship:form_father_name")}
            </label>
            <input
              id="fatherName"
              type="text"
              {...register("fatherName", {
                required: "Father's name is required",
              })}
              className={inputField}
            />
            {errors.fatherName && (
              <p className="text-red-500">{errors.fatherName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="fatherOccupation" className={label}>
              {t("scholarship:form_father_occupation")}
            </label>
            <input
              id="fatherOccupation"
              type="text"
              {...register("fatherOccupation", {
                required: "Father's occupation is required",
              })}
              className={inputField}
            />
            {errors.fatherOccupation && (
              <p className="text-red-500">{errors.fatherOccupation.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="motherName" className={label}>
              ({addSerial()}){t("scholarship:form_mother_name")}
            </label>
            <input
              id="motherName"
              type="text"
              {...register("motherName", {
                required: "Mother's name is required",
              })}
              className={inputField}
            />
            {errors.motherName && (
              <p className="text-red-500">{errors.fatherName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="motherOccupation" className={label}>
              {t("scholarship:form_mother_occupation")}
            </label>
            <input
              id="motherOccupation"
              type="text"
              {...register("motherOccupation", {
                required: "Mother's occupation is required",
              })}
              className={inputField}
            />
            {errors.motherOccupation && (
              <p className="text-red-500">{errors.fatherOccupation.message}</p>
            )}
          </div>
        </div>

        {/* Permanent Address */}
        <div>
          <label className="block font-medium text-primary">
            ({addSerial()}) {t("scholarship:form_permanent_address")}:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="permanentCity" className={label}>
                {t("scholarship:form_city")}
              </label>
              <input
                id="permanentCity"
                type="text"
                {...register("permanentCity", { required: "City is required" })}
                className={allInput}
              />
              {errors.permanentCity && (
                <p className="text-red-500">{errors.permanentCity.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="permanentVillage" className={label}>
                {t("scholarship:form_village")}
              </label>
              <input
                id="permanentVillage"
                type="text"
                {...register("permanentVillage", {
                  required: "Village is required",
                })}
                className={allInput}
              />
              {errors.permanentVillage && (
                <p className="text-red-500">
                  {errors.permanentVillage.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="permanentCountry" className={label}>
                {t("scholarship:form_country")}
              </label>
              <input
                id="permanentCountry"
                value={t("scholarship:form_bd")}
                readOnly
                type="text"
                className={allInput}
              />
            </div>
          </div>
        </div>
        {/* current Address */}
        <div>
          <label className="block font-medium text-primary">
            ({addSerial()}) {t("scholarship:form_current_address")}:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="currentCity" className={label}>
                {t("scholarship:form_city")}
              </label>
              <input
                id="currentCity"
                type="text"
                {...register("currentCity", { required: "City is required" })}
                className={allInput}
              />
              {errors.currentCity && (
                <p className="text-red-500">{errors.permanentCity.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="currentVillage" className={label}>
                {t("scholarship:form_village")}
              </label>
              <input
                id="currentVillage"
                type="text"
                {...register("currentVillage", {
                  required: "Village is required",
                })}
                className={allInput}
              />
              {errors.currentVillage && (
                <p className="text-red-500">
                  {errors.permanentVillage.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="permanentCountry" className={label}>
                {t("scholarship:form_country")}
              </label>
              <input
                id="permanentCountry"
                value={t("scholarship:form_bd")}
                readOnly
                type="text"
                className={allInput}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="mobile" className={label}>
            ({addSerial()}) {t("scholarship:scholarship_input_mobile")}
          </label>
          <input
            id="mobile"
            type="text"
            {...register("mobileNumber", {
              required: "Mobile Number is required",
            })}
            className={inputField}
          />
          {errors.mobileNumber && (
            <p className="text-red-500">{errors.permanentVillage.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="guardianName" className={label}>
              ({addSerial()}) {t("scholarship:form_guardian_name")}
            </label>
            <input
              id="guardianName"
              type="text"
              {...register("guardianName", {
                required: "Mobile Number is required",
              })}
              className={inputField}
            />
            {errors.guardianName && (
              <p className="text-red-500">{errors.guardianName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="guardianOccupation" className={label}>
              {t("scholarship:form_guardian_occupation")}
            </label>
            <input
              id="guardianOccupation"
              type="text"
              {...register("guardianOccupation", {
                required: "Guardian Occupation is required",
              })}
              className={inputField}
            />
            {errors.guardianOccupation && (
              <p className="text-red-500">
                {errors.guardianOccupation.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="relationship" className={label}>
              {t("scholarship:form_relationship")}
            </label>
            <input
              id="relationship"
              type="text"
              {...register("relationship", {
                required: "Relationship Occupation is required",
              })}
              className={inputField}
            />
            {errors.relationship && (
              <p className="text-red-500">{errors.relationship.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="currentClass"
              className="block text-primary font-medium "
            >
              ({addSerial()}) {t("scholarship:form_current_class")}
            </label>
            <input
              id="currentClass"
              type="text"
              {...register("currentClass", {
                required: "Current Class is required",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
            />
            {errors.currentClass && (
              <p className="text-red-500">{errors.currentClass.message}</p>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="institution"
              className="block text-primary font-medium "
            >
              {t("scholarship:form_institution_name")}
            </label>
            <input
              id="institution"
              type="text"
              {...register("institution", {
                required: "institution is required",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
            />
            {errors.institution && (
              <p className="text-red-500">{errors.institution.message}</p>
            )}
          </div>
        </div>

        {/* Higher Secondary Result */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="higherSecondaryResult" className={label}>
              ({addSerial()}) {t("scholarship:form_higher_secondary_result")}
            </label>
            <input
              id="higherSecondaryResult"
              type="text"
              {...register("higherSecondaryResult", {
                required: "Higher Secondary Result is required",
              })}
              className={inputField}
            />
            {errors.higherSecondaryResult && (
              <p className="text-red-500">
                {errors.higherSecondaryResult.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="higherSecondaryYear" className={label}>
              {t("scholarship:form_passing_year")}
            </label>
            <input
              id="higherSecondaryYear"
              type="text"
              {...register("higherSecondaryYear", {
                required: "higher secondary year is required",
              })}
              className={inputField}
            />
            {errors.higherSecondaryYear && (
              <p className="text-red-500">
                {errors.higherSecondaryYear.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="higherSecondaryGrade" className={label}>
              {t("scholarship:form_grade_point")}
            </label>
            <input
              id="higherSecondaryGrade"
              type="text"
              {...register("higherSecondaryGrade", {
                required: "Higher Secondary Grade is required",
              })}
              className={inputField}
            />
            {errors.higherSecondaryGrade && (
              <p className="text-red-500">
                {errors.higherSecondaryGrade.message}
              </p>
            )}
          </div>
        </div>
        {/* Secondary Result */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="secondaryResult" className={label}>
              ({addSerial()}) {t("scholarship:form_secondary_result")}
            </label>
            <input
              id="secondaryResult"
              type="text"
              {...register("secondaryResult", {
                required: "Secondary Result is required",
              })}
              className={inputField}
            />
            {errors.higherSecondaryGrade && (
              <p className="text-red-500">
                {errors.higherSecondaryGrade.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="secondaryYear" className={label}>
              {" "}
              {t("scholarship:form_passing_year")}
            </label>
            <input
              id="secondaryYear"
              type="text"
              {...register("secondaryYear", {
                required: "Secondary Year is required",
              })}
              className={inputField}
            />
            {errors.secondaryYear && (
              <p className="text-red-500">{errors.secondaryYear.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="secondaryGrade" className={label}>
              {t("scholarship:form_grade_point")}
            </label>
            <input
              id="secondaryGrade"
              type="text"
              {...register("secondaryGrade", {
                required: "Secondary Grade is required",
              })}
              className={inputField}
            />
            {errors.secondaryGrade && (
              <p className="text-red-500">{errors.secondaryGrade.message}</p>
            )}
          </div>
        </div>
        {/* Eighth Grade Result */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="eightResult" className={label}>
              ({addSerial()}) {t("scholarship:form_eighth_grade_result")}
            </label>
            <input
              id="eightResult"
              type="text"
              {...register("eightResult", {
                required: "Eighth Grade Result is required",
              })}
              className={inputField}
            />
            {errors.eightResult && (
              <p className="text-red-500">{errors.eightResult.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="eightYear" className={label}>
              {t("scholarship:form_passing_year")}
            </label>
            <input
              id="eightYear"
              type="text"
              {...register("eightYear", { required: "Eight Year is required" })}
              className={inputField}
            />
            {errors.eightYear && (
              <p className="text-red-500">{errors.eightYear.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="eightGrade" className={label}>
              {t("scholarship:form_grade_point")}
            </label>
            <input
              id="eightGrade"
              type="text"
              {...register("eightGrade", {
                required: "Eight Grade is required",
              })}
              className={inputField}
            />
            {errors.eightGrade && (
              <p className="text-red-500">{errors.eightGrade.message}</p>
            )}
          </div>
        </div>

        {/* Ninth grade serial number*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="nightResult" className={label}>
              ({addSerial()}) {t("scholarship:form_ninth_grade_serial")}
            </label>
            <input
              id="nightResult"
              type="text"
              {...register("nightResult", {
                required: "Ninth grade serial number is required",
              })}
              className={inputField}
            />
            {errors.nightResult && (
              <p className="text-red-500">{errors.nightResult.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="nightYear" className={label}>
              {t("scholarship:form_eighth_grade_serial")}
            </label>
            <input
              id="nightYear"
              type="text"
              {...register("nightYear", { required: "Ninth Year is required" })}
              className={inputField}
            />
            {errors.nightYear && (
              <p className="text-red-500">{errors.nightYear.message}</p>
            )}
          </div>
        </div>
        {/* Five Grade Result */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="fiveResult" className={label}>
              ({addSerial()}) {t("scholarship:form_five_grade_result")}
            </label>
            <input
              id="fiveResult"
              type="text"
              {...register("fiveResult", {
                required: "Five Grade Result is required",
              })}
              className={inputField}
            />
            {errors.fiveResult && (
              <p className="text-red-500">{errors.fiveResult.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="fifthYear" className={label}>
              {t("scholarship:form_passing_year")}
            </label>
            <input
              id="fifthYear"
              type="text"
              {...register("fifthYear", { required: "Fifth Year is required" })}
              className={inputField}
            />
            {errors.fifthYear && (
              <p className="text-red-500">{errors.fifthYear.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="fifthGrade" className={label}>
              {t("scholarship:form_grade_point")}
            </label>
            <input
              id="fifthGrade"
              type="text"
              {...register("fifthGrade", {
                required: "Fifth Grade is required",
              })}
              className={inputField}
            />
            {errors.fifthGrade && (
              <p className="text-red-500">{errors.fifthGrade.message}</p>
            )}
          </div>
        </div>
        {/* Family Members*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="familyMember" className={label}>
              ({addSerial()}) {t("scholarship:form_family_members")}
            </label>
            <input
              id="familyMember"
              type="text"
              {...register("familyMember", {
                required: "Family Members is required",
              })}
              className={inputField}
            />
            {errors.familyMember && (
              <p className="text-red-500">{errors.familyMember.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="brothers" className={label}>
              {t("scholarship:form_brothers")}
            </label>
            <input
              id="brothers"
              type="text"
              {...register("brothers", { required: "brothers is required" })}
              className={inputField}
            />
            {errors.brothers && (
              <p className="text-red-500">{errors.brothers.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="sisters" className={label}>
              {t("scholarship:form_sisters")}
            </label>
            <input
              id="sisters"
              type="text"
              {...register("sisters", { required: "sisters is required" })}
              className={inputField}
            />
            {errors.sisters && (
              <p className="text-red-500">{errors.sisters.message}</p>
            )}
          </div>
        </div>
        {/*Studying Siblings*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="studyingSiblings" className={label}>
              ({addSerial()}) {t("scholarship:form_studying_siblings")}
            </label>
            <input
              id="studyingSiblings"
              type="text"
              {...register("studyingSiblings", {
                required: "Studying Siblings is required",
              })}
              className={inputField}
            />
            {errors.studyingSiblings && (
              <p className="text-red-500">{errors.studyingSiblings.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="studyingBrother" className={label}>
              {t("scholarship:form_studying_brothers")}
            </label>
            <input
              id="studyingBrother"
              type="text"
              {...register("studyingBrother", {
                required: "studying brother is required",
              })}
              className={inputField}
            />
            {errors.studyingBrother && (
              <p className="text-red-500">{errors.studyingBrother.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="studyingSister" className={label}>
              {t("scholarship:form_studying_sisters")}
            </label>
            <input
              id="studyingSister"
              type="text"
              {...register("studyingSister", {
                required: "studying sister is required",
              })}
              className={inputField}
            />
            {errors.studyingSister && (
              <p className="text-red-500">{errors.studyingSister.message}</p>
            )}
          </div>
        </div>
        {/*Earning Family Members*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="earningMember" className={label}>
              ({addSerial()}){t("scholarship:form_earning_family_members")}
            </label>
            <input
              id="earningMember"
              type="text"
              {...register("earningMember", {
                required: "earning member is required",
              })}
              className={inputField}
            />
            {errors.earningMember && (
              <p className="text-red-500">{errors.earningMember.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="relationshipEarners" className={label}>
              {t("scholarship:form_relationship_with_earners")}
            </label>
            <input
              id="relationshipEarners"
              type="text"
              {...register("relationshipEarners", {
                required: "relationship earners is required",
              })}
              className={inputField}
            />
            {errors.relationshipEarners && (
              <p className="text-red-500">
                {errors.relationshipEarners.message}
              </p>
            )}
          </div>
        </div>
        {/*Monthly Family Income (Taka)*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="monthlyIncome" className={label}>
              ({addSerial()}){t("scholarship:form_monthly_family_income")}
            </label>
            <input
              id="monthlyIncome"
              type="text"
              {...register("monthlyIncome", {
                required: "Monthly Family Income (Taka) is required",
              })}
              className={inputField}
            />
            {errors.monthlyIncome && (
              <p className="text-red-500">{errors.monthlyIncome.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="amountCultivable" className={label}>
              {t("scholarship:form_cultivable_land")}
            </label>
            <input
              id="amountCultivable"
              type="text"
              {...register("amountCultivable", {
                required: "amount cultivable is required",
              })}
              className={inputField}
            />
            {errors.amountCultivable && (
              <p className="text-red-500">{errors.amountCultivable.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="Recommendation" className={label}>
            ({addSerial()}) {t("scholarship:form_recommendation")}
          </label>
          <input
            id="Recommendation"
            type="text"
            {...register("Recommendation", {
              required: "Recommendation is required",
            })}
            className={inputField}
          />
          {errors.Recommendation && (
            <p className="text-red-500">{errors.Recommendation.message}</p>
          )}
        </div>

        {/*School Bank Account Name*/}
        <div>
          <span className="text-base text-primary">
            ({addSerial()}) {t("scholarship:form_school_bank")}:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label htmlFor="schoolBankName" className={label}>
                {" "}
                {t("scholarship:form_account_name")}
              </label>
              <input
                id="schoolBankName"
                type="text"
                {...register("schoolBankName", {
                  required: "school bank account is required",
                })}
                className={inputField}
              />
              {errors.schoolBankName && (
                <p className="text-red-500">{errors.schoolBankName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="accountNumber" className={label}>
                {t("scholarship:form_account_number")}
              </label>
              <input
                id="accountNumber"
                type="text"
                {...register("accountNumber", {
                  required: "account number is required",
                })}
                className={inputField}
              />
              {errors.accountNumber && (
                <p className="text-red-500">{errors.accountNumber.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="bankName" className={label}>
                {t("scholarship:form_bank_name")}
              </label>
              <input
                id="bankName"
                type="text"
                {...register("bankName", { required: "bank name is required" })}
                className={inputField}
              />
              {errors.bankName && (
                <p className="text-red-500">{errors.bankName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="branch" className={label}>
                {t("scholarship:form_branch")}
              </label>
              <input
                id="branch"
                type="text"
                {...register("branch", { required: "branch is required" })}
                className={inputField}
              />
              {errors.branch && (
                <p className="text-red-500">{errors.branch.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* signature  */}
        <div className="flex flex-col md:flex-row-reverse justify-between gap-6">
          {/* Applicant's Signature */}
          <div className="space-y-2 w-full md:w-1/2">
            <label htmlFor="applicantSignature" className={label}>
              {t("scholarship:form_applicant_signature")}
            </label>
            <input
              id="applicantSignature"
              type="text"
              {...register("applicantSignature", {
                required: "Applicant signature is required",
              })}
              className={inputField}
            />
            {errors.applicantSignature && (
              <p className="text-red-500">
                {errors.applicantSignature.message}
              </p>
            )}
          </div>

          {/* Guardian's Signature */}
          <div className="space-y-2 w-full md:w-1/2">
            <label htmlFor="guardianSignature" className={label}>
              {t("scholarship:form_guardian_signature")}
            </label>
            <input
              id="guardianSignature"
              type="text"
              {...register("guardianSignature", {
                required: "Signature is required",
              })}
              className={inputField}
            />
            {errors.guardianSignature && (
              <p className="text-red-500">{errors.guardianSignature.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="profilePicture" className={label}>
            {t("scholarship:form_profile_picture")}
          </label>
          <input
            id="profilePicture"
            type="file"
            {...register("profilePicture", {
              required: "profile picture is required",
            })}
            className="mt-1 block w-full"
            onChange={handleImageUpload}
          />
          {errors.profilePicture && (
            <p className="text-red-500">{errors.profilePicture.message}</p>
          )}
        </div>
        {webpImage && (
          <div className="mt-4">
            <p className="font-medium text-green-500">
              {t("scholarship:form_img_format")}
            </p>
            <img
              src={webpImage}
              alt="Uploaded Preview"
              className="w-32 h-32 object-cover mt-2"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-primary text-natural py-2 px-4"
        >
          {t("scholarship:form_submit")}
        </button>
      </form>
    </div>
  );
};

export default ScholarshipForm;
