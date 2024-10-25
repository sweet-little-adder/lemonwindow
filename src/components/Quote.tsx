import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Quote() {
    return (
        <div className="bg-[#FFF8EF] p-8 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-96 w-[95%] md:w-1/2 rounded-3xl drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
            <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                />
            </Box>
        </div>
    );
}

export default Quote;
