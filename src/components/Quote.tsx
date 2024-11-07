import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
// import axios from "axios";
import emailjs from "emailjs-com";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Props {
    setQuote: React.Dispatch<React.SetStateAction<boolean>>;
    // quote: boolean;
}

const services = [
    "Roof washing",
    "Gutter cleaning",
    "Window Cleaning",
    "Power washing",
    "Car Tile Grout cleaning",
    "Carpet Cleaning",
];
interface FormData {
    name: string;
    email: string;
    zip: string;
    service: string[];
}
const Quote: React.FC<Props> = ({ setQuote }) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        zip: "",
        service: [],
    });
    {
        console.log("formData", formData);
    }
    const [submit, setSubmit] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value, checked } = e.target;

        if (e.target.type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                service: checked
                    ? [...prevData.service, value] // Add service if checked
                    : prevData.service.filter((service) => service !== value), // Remove service if unchecked
            }));
        } else {
            setFormData({
                ...formData,
                [id]: value,
            });
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);

        console.log("XOXO handleSubmit", "e", e, "formData", formData);

        try {
            console.log("XOXO Send data to the backend:", e);

            // const response = await axios.post(
            //     "http://your-backend-url/api/submit",
            //     formData
            // );
            // console.log("Response:", response.data);
            console.log("XOXO Send data to emailjs:", e);

            const result = await emailjs.send(
                "service_6esc1sd", // Service ID
                "template_4kwt0es", // Template ID
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    zip_code: formData.zip,
                    service: formData.service,
                },
                "OYlYCopLHoTo-VBi3" // User ID
            );

            console.log("XOXO Email sent successfully:", e, result);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#FFF8EF] z-20 bg-noise2 border p-9 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-fit  w-[95%] sm:w-fit  rounded-2xl drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]"
        >
            <div
                onClick={() => setQuote(false)}
                className="pointer-events-auto w-fit absolute top-5 right-5 z-10 text-2xl text-[#c9c9c9]/25  cursor-pointer"
            >
                ✕
            </div>
            {submit ? (
                <div className="bg-noise3 flex justify-center items-center font-streetwear border-[12px]  border-[#ff9c9c] bg-center bg-cover bg-repeat-x sm:w-96 h-96 p-[-5px]">
                    <div className="relative z-20 flex-col">
                        <p className="text-2xl">Thank you! </p>
                        <br />
                        Your quote has been submited. <br />
                        Here's a lemon
                    </div>
                    <div className="absolute z-0 inset-0 bg-[#FFF8EF] opacity-60"></div>
                </div>
            ) : (
                <>
                    <Box
                        component="form"
                        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                        noValidate
                        autoComplete="off"
                        className="flex items-end"
                    >
                        <TextField
                            id="name"
                            label="Name"
                            required
                            variant="outlined"
                            // value={formData[0]}
                            onChange={handleChange}
                        />
                        <TextField
                            id="email"
                            label="Phone"
                            required
                            variant="outlined"
                            // value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            id="zip"
                            label="Zip code"
                            required
                            variant="filled"
                            // value={formData.zip}
                            onChange={handleChange}
                        />
                    </Box>
                    <div className="font-sans/ font-bold mt-6 text-2xl">
                        What do you want?
                    </div>
                    <div className="flex flex-wrap gap-4 gap-x-2 justify-right mt-5 ml-3">
                        {services.map((service, index) => (
                            <FormGroup key={index}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={true}
                                            onChange={handleChange}
                                            id="service"
                                            value={service}
                                        />
                                    }
                                    label={service}
                                    id="service"
                                />
                            </FormGroup>
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="mt-5"
                        // onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </>
            )}
        </form>
    );
};

export default Quote;
