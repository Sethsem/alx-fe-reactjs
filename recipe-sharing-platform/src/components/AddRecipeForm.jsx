import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddRecipeForm = ({ onAddRecipe }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Recipe title is required"),
    ingredients: Yup.string().required("At least one ingredient is required"),
    steps: Yup.string().required("Preparation steps are required"),
  });

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Recipe</h2>

      <Formik
        initialValues={{ title: "", ingredients: "", steps: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const ingredientsArray = values.ingredients.split(",").map((item) => item.trim());

          const newRecipe = {
            id: Date.now(),
            title: values.title,
            summary: values.steps.substring(0, 50) + "...", // Short summary
            image: "https://via.placeholder.com/150", // Placeholder image
            ingredients: ingredientsArray,
            instructions: values.steps,
          };

          onAddRecipe(newRecipe);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-gray-700">Recipe Title</label>
              <Field
                type="text"
                name="title"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              <ErrorMessage name="title" component="p" className="text-red-500" />
            </div>

            <div>
              <label className="block text-gray-700">Ingredients (comma-separated)</label>
              <Field
                as="textarea"
                name="ingredients"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              <ErrorMessage name="ingredients" component="p" className="text-red-500" />
            </div>

            <div>
              <label className="block text-gray-700">Preparation Steps</label>
              <Field
                as="textarea"
                name="steps"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              <ErrorMessage name="steps" component="p" className="text-red-500" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Add Recipe
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddRecipeForm;
