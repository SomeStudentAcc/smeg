import React, { Suspense } from "react";
import Filters from "./Filters";

export default function FiltersPage() {
  return (
    <Suspense fallback={<div>Loading filters...</div>}>
      <Filters />
    </Suspense>
  );
}
