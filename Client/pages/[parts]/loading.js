import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px" }}>
      <CircularProgress isIndeterminate color="purple.300" />
    </div>
  );
}
