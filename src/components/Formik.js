import { useFormik } from 'formik';
import './Formik.css';

const validate = (values) => {

    const errors = {};

    if (!values.email.includes('@')) {
        errors.email = 'Email should have @'
    }

    if (values.name === '') {
        errors.name = 'You must imput Name'
    }

    const phoneRegExp = /^\d+$/;
    if (values.phone.length !== 12 || !phoneRegExp.test(values.phone)) {
        errors.phone = 'Phone number should contain 12 digits';
    }

    return errors;
}

function FormikInput() {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            phone: ''
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}

            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />

            {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}

            <label htmlFor="phone">Phone Number</label>
            <input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
            />

            {formik.touched.phone && formik.errors.phone && <p>{formik.errors.phone}</p>}

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default FormikInput;