import {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpenseChart';
import './Expense.css';

const Expense = (props) => {

    const [enteredYear,setEnteredYear] = useState("2021");

    const handEnteredYear = (year) => {
        setEnteredYear(year);
    }

    const handleFilterYear  = (year) => {
        //lấy mảng api ảo
        const listExpense = props.item;

        //lọc 1 mảng mới có năm đẫ được chọn
        const listExpenseFilter = listExpense.filter( (element) => element.date.getFullYear().toString() === year);
        
        //trả về mảng đã được lọc qua năm
        return listExpenseFilter 
    }
    const handler = handleFilterYear(enteredYear);

    //kiểm tra xem mảng vừa lọc có bao nhiêu phàn tử? nếu 0 phần tử trả về true;
    const isShowExpense = handleFilterYear(enteredYear).length === 0;

    const show = handleFilterYear(enteredYear).map((expense,index) => (
        <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} 
        />))

    return (
        <Card className="expense">
            {/* 
                cái component khi được gọi nó giống như 1 thẻ tag
                các atribute truyền vào giống của thẻ tag, nên nó 
                phải nằm trong thẻ mở
                cái này e thêm thẻ đóng cũng đc nhưng nó bị thừa,ko ảnh hưởng gì đâu
            */}


            <ExpenseFilter onSelectedYearHandle={handEnteredYear} />

            <ExpensesChart expenses={handler} />

            {isShowExpense ? <h2 style={{color : "white",textAlign : "center"}}>Not Found Expense!</h2> : show }

            

        </Card>
    );
};

export default Expense;