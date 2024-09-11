import { Category } from ".";

interface IProps {
  categories: Category[];
  onChangeCategory: (id: string) => void;
  idCategoryActive: string;
}

const Categories = ({
  categories,
  onChangeCategory,
  idCategoryActive,
}: IProps) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap w-full my-3">
      {categories.map((category) => (
        <div
          className={`inline-block   font-bold px-3 text-xl  cursor-pointer ${
            idCategoryActive === category.id ? "text-white" : "text-[#5E5E5E]"
          }`}
          onClick={() => onChangeCategory(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
