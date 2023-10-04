import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
    btnType?: 'button' | 'submit';
    rightIcon?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IOption {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: IOption[];
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface ICar {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number;
}
export interface CarCardProps {
    car: ICar;
}

export interface CarDetailsProps {
    isOpen: boolean;
    car: ICar;
    closeModal: () => void;
}

export interface IFilter {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
  