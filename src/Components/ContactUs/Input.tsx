import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const Input = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(t("Full Name is required")),
    email: Yup.string()
      .email(t("Invalid email address"))
      .required(t("Email is required")),
    queryRelated: Yup.string(),
    message: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      queryRelated: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const style =
    "mt-2 px-7 py-5 bg-white border border-purple-700 placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1";
  const styleError =
    "mt-2 px-7 py-5 bg-white border border-red-600 placeholder-red-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1";
  const styleButton =
    "mt-2 font-bold text-center bg-amber-300 text-black w-full h-14 hover:bg-amber-400 transition duration-500 ease-in-out hover:bg-amber-400 transform hover:-translate-y-1 hover:scale-110";
  const styleButtonDisabled =
    "mt-2 font-bold pb-2 bg-slate-300 text-black w-full h-14 hover:bg-amber-400 opacity-50 cursor-not-allowed";

  return (
    <div className="flex items-center justify-center pb-20">
      <div className="lg:w-2/4 w-full mx-5 lg:mx-0">
        <form onSubmit={formik.handleSubmit}>
          <input
            className={formik.errors.fullName ? styleError : style}
            type="text"
            placeholder={
              formik.errors.fullName ? formik.errors.fullName : t("Full Name")
            }
            {...formik.getFieldProps("fullName")}
          />
          <input
            className={formik.errors.email ? styleError : style}
            type="email"
            placeholder={
              formik.errors.email ? formik.errors.email : t("Your Email")
            }
            {...formik.getFieldProps("email")}
          />

          <input
            className={style}
            placeholder={t("Query Related")}
            {...formik.getFieldProps("queryRelated")}
          />
          <input
            className={`${style} pb-20`}
            placeholder={t("Message")}
            {...formik.getFieldProps("message")}
          />

          <button
            className={formik.isValid ? styleButton : styleButtonDisabled}
            type="submit"
            disabled={!formik.isValid}
          >
            {t("Send Message")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
