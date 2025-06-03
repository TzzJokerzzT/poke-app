import { Pagination } from "@heroui/react";
import ButtonComponent from "../Button/Button";
import { useState } from "react";

const PaginationComponent = ({
  total,
  prev,
  next,
}: {
  total: number;
  prev: any;
  next: any;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col gap-5">
      <Pagination
        color="secondary"
        page={currentPage}
        total={total}
        onChange={setCurrentPage}
      />
      <div className="flex gap-2">
        <ButtonComponent
          color="secondary"
          size="sm"
          variant="flat"
          onPress={() => setCurrentPage(prev)}
        >
          Previous
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          size="sm"
          variant="flat"
          onPress={() => setCurrentPage(next)}
        >
          Next
        </ButtonComponent>
      </div>
    </div>
  );
};

export default PaginationComponent;
