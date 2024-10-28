import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
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
}
const Quote: React.FC<Props> = ({ setQuote }) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
    });
    const [submit, setSubmit] = useState<boolean>(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Send data to the backend
            const response = await axios.post(
                "http://your-backend-url/api/submit",
                formData
            );
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#FFF8EF] bg-noise2 border p-9 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-fit  w-[95%] md:w-fit  rounded-2xl drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]"
        >
            {" "}
            <div
                onClick={() => setQuote(false)}
                className="pointer-events-auto w-fit absolute top-5 right-5 z-10 text-2xl text-[#c9c9c9]/25  cursor-pointer"
            >
                ✕
            </div>
            {submit ? (
                <div className="bg-noise3 flex justify-center items-center font-streetwear border-[12px]  border-[#ff9c9c] bg-center bg-cover bg-repeat-x md:w-96 h-96 p-[-5px]">
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
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                        />{" "}
                        <TextField
                            id="standard-basic"
                            label="Phone"
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            id="filled-basic"
                            label="Zip code"
                            variant="filled"
                            value={formData.name}
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
                                    control={<Checkbox />}
                                    label={service}
                                />
                            </FormGroup>
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="mt-5"
                        onClick={() => setSubmit(true)}
                    >
                        Submit
                    </button>
                </>
            )}
        </form>
    );
};

export default Quote;
