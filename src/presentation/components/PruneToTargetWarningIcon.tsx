import Box from "@mui/material/Box";
import { useGetAllRowsQuery } from "../../data/RowsRepo";
import { Warning } from "@mui/icons-material";
import { grey, red } from "@mui/material/colors";
import { Row } from "../../domain/row/Row";

export default function PruneToTargetWarningIcon() {
  const { data, error, isLoading } = useGetAllRowsQuery({});

  return (
    <Box
      sx={{ alignContent: "center", alignItems: "center", alignSelf: "center" }}
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Warning
            sx={{
              mt: "6px",
              verticalAlign: "middle",
              color:
                Row.prunedToTargetAverage(data) > 80 ? grey[500] : red[500],
            }}
          />
        </>
      ) : null}
    </Box>
  );
}
