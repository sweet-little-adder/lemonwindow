import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

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

const Quote: React.FC<Props> = ({ setQuote }) => {
    return (
        <div className="bg-[#FFF8EF] bg-noise2 border p-9 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-fit  w-[95%] md:w-1/2 rounded-2xl drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
            <div
                onClick={() => setQuote(false)}
                className="pointer-events-auto w-fit absolute top-5 right-5 z-10 text-2xl text-[#c9c9c9]/25  cursor-pointer"
            >
                ✕
            </div>
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
                />{" "}
                <TextField
                    id="standard-basic"
                    label="Phone"
                    variant="outlined"
                />
                <TextField
                    id="filled-basic"
                    label="Zip code"
                    variant="filled"
                />
            </Box>
            <div className="font-sans/ font-bold mt-6 text-2xl">
                {" "}
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
            <button className="mt-5" onClick={() => setQuote(false)}>
                Submit
            </button>
        </div>
    );
};

export default Quote;
