import { Formik, Form, Field } from "formik";
const initFormValues = {
  namaLengkap: "",
  email: "",
  notlpon: "",
  alamat: "",

};
const handleOnSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};
const MainForm = () => (
  <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
    {({ isSubmitting }) => (
      <Form>
        <div className="row mb-3">
          <label htmlFor="namaLengkap" className="col-md-2 col-form-label">
            Nama lengkap
          </label>
          <div className="col-md-10">
            <Field type="text" name="namaLengkap" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-md-2 col-formlabel">
            Email
          </label>
          <div className="col-md-10">
            <Field
              type="email"
              name="email"
              className="form-control"
              placeholder="example@domain.bla"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="telepon" className="col-md-2 col-form-label">
            No Telepon
          </label>
          <div className="col-md-10">
            <Field type="text" name="notlpon" className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="alamat" className="col-md-2 col-formlabel">
            Alamat
          </label>
          <div className="col-md-10">
            <Field name="alamat" as="textarea" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-2">
            <button
              type="submit"
              className="btn btn-primary me-3"
              disabled={isSubmitting}
            >
              Kirim
            </button>
            <button type="reset" className="btn btn-outline-secondary">
              Reset
            </button>
          </div>
        </div>
      </Form>
    )}
  </Formik>
);
export default MainForm;

// export default function Rincianpesan() {
//   return (
//     <div>

//         <div className="form-data mt-4">
//           <div className="row ">
//             <div className="col-6">
//               <label>Nama Depan</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="Nama Depan"
//               />
//             </div>
//             <div className="col-6">
//               <label>Nama Belakang</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="Nama Belakang"
//               />
//             </div>
//           </div>
//           <div className="row mt-2">
//             <div className="col-6">
//               {" "}
//               <label>Email</label>
//               <input
//                 type="email"
//                 class="form-control"
//                 placeholder="Masukkan Email"
//               />
//             </div>
//           </div>
//           <div className="row mt-2">
//             <div className="col-6">
//               {" "}
//               <label>No Telepon</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="No Telepon"
//               />
//             </div>
//           </div>
//           <div className="row mt-2">
//             <div className="col-6">
//               {" "}
//               <label>Nama Pemesan</label>
//               <input type="text" class="form-control" />
//             </div>
//           </div>
//         </div>
//      </div>
//   );
// }
