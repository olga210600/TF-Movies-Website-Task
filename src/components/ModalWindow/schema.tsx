import * as Yup from "yup";

const validateMessages = {
    name : {
        required : "movie Name cannot be empty",
        min      : "movie Name cannot be less than 2 characters",
        max      : "movie Name cannot be longer than 40 characters",
    },
    image : {
        required : "Movie image cannot be empty",
    },
    year : {
        required : "Movie year cannot be empty",
        min      : "Movie year cannot be less than 2 characters",
        max      : "Movie year cannot be longer than 4 characters",
    },
    description : {
        required : "Movie description cannot be empty",
        min      : "Movie description cannot be less than 4 characters",
    },
    director : {
        required : "Movie director cannot be empty",
        min      : "Movie director cannot be less than 4 characters",
        max      : "Movie director cannot be longer than 50 characters",
    },
    video : {
        required : "Movie video cannot be empty",
    },
};

export const validateSchema = Yup.object().shape({
    name : Yup.string()
        .required(validateMessages.name.required)
        .min(2, validateMessages.name.min)
        .max(40, validateMessages.name.max),
    image : Yup.string()
        .required(validateMessages.image.required),
    year : Yup.string()
        .required(validateMessages.year.required)
        .min(4, validateMessages.year.min)
        .max(4, validateMessages.year.max),
    description : Yup.string()
        .required(validateMessages.description.required)
        .min(4, validateMessages.description.min),
    director : Yup.string()
        .required(validateMessages.director.required)
        .min(4, validateMessages.director.min)
        .max(50, validateMessages.director.max),
    video : Yup.string()
        .required(validateMessages.video.required),
});
