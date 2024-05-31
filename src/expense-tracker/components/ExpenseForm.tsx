import { z } from 'zod';
import  { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import categories from '../categories';

const schema = z.object({
    desciption: z.string().min(3, {message: "Description must be at least 3 characters long"}).max(50),
    amount: z.number({invalid_type_error: "Amount field is required"}).min(0.01).max(100_000),
    category: z.enum(categories, 
        {errorMap: () => ({message: "Category is required"})})
});

type ExpenseFormData = z.infer<typeof schema>;
const ExpenseForm = () => {
   const { register, handleSubmit, formState: { errors }} = useForm<ExpenseFormData>({ resolver: zodResolver(schema)})
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
        <div className="mb-3">
            <label htmlFor='description' className="form-label">Description</label>
            <input {...register('desciption')} id="description" type="text" className="form-control" />
            {errors.desciption && <p className="text-danger">{errors.desciption.message}</p>}
        </div>

        <div className="mb-3">
            <label htmlFor='amount' className="form-label">Amount</label>
            <input {...register("amount", {valueAsNumber: true})} id="amount" type="number" className="form-control" />
            {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
        </div>

        <div className="mb-3">
            <label htmlFor='category' className="form-label">Category</label>
            <select {...register('category')} id="category" className="form-select">
                <option value=""></option>
                {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>      
  )
}

export default ExpenseForm