import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <TextField
      placeholder="Kata Kunci..."
      variant="outlined"
      size="medium"
      sx={{ width: 400 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
