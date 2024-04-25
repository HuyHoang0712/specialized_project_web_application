import React, { useState, useEffect, useRef } from "react";
import { removeVietnameseTones } from "@/app/utils/TransformVNtoEng.service";
interface SearchIuputProps {
  label: string;
  register: any;
  data: any[];
  name_key: string;
  onClick: any;
}

const SearchIuput = (props: SearchIuputProps) => {
  const { label, register, data, name_key, onClick } = props;
  const [active, setActive] = useState(false);
  const [curData, setCurData] = useState(data);
  const searchBoxRef = useRef(null);
  const [filterBoxPosition, setFilterBoxPosition] = useState("bottom-12");

  useEffect(() => {
    setCurData(data);
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      if (searchBoxRef.current) {
        const rect = (
          searchBoxRef.current as HTMLElement
        ).getBoundingClientRect();
        console.log(rect.top, window.innerHeight / 2);
        
        setFilterBoxPosition(
          rect.top < window.innerHeight / 2 ? "top-12" : "bottom-12"
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handlerBlur = (e: any) => {
      if (!(e.target as any).closest(`.${name_key}`)) {
        setActive(false);
      }
    };
    document.addEventListener("click", handlerBlur);

    return () => {
      document.removeEventListener("click", handlerBlur);
    };
  }, []);

  const filterName = (name: string) => {
    setCurData(
      data.filter((item) =>
        removeVietnameseTones(item[name_key].toLowerCase()).includes(
          removeVietnameseTones(name.toLowerCase())
        )
      )
    );
  };

  const onClickItem = (item: any) => {
    onClick(item);
    setActive(false);
  };

  return (
    <div className="flex flex-col gap-2 flex-1">
      <h3 className="text-black-100">{label}</h3>
      <div
        ref={searchBoxRef}
        className={`flex items-center relative ${name_key}`}
      >
        <input
          type="text"
          {...register}
          className="w-full order border-primary-30 rounded-md shadow-sm py-2"
          placeholder="-----"
          contextMenu="false"
          autoComplete="off"
          onFocus={() => setActive(true)}
          onChange={(e) => filterName(e.target.value)}
        />
        {active && (
          <div
            className={`flex flex-col gap-2 z-10 ${filterBoxPosition} max-h-64 w-full overflow-auto rounded-lg px-2 py-3 bg-white shadow-sm shadow-black-10 absolute no-scrollbar`}
          >
            {curData.length > 0 ? (
              curData.map((item, index) => (
                <p
                  key={index}
                  className="hover:bg-primary-10 px-3 py-1 rounded-lg cursor-pointer"
                  onClick={(e) => {
                    onClickItem(item);
                  }}
                >
                  {item[name_key]}
                </p>
              ))
            ) : (
              <span className="flex justify-center items-center gap-2">
                -- Empty --
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchIuput;
