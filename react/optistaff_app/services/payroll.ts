export interface DutyLog {
    date: string;
    hours: number;
}

export interface PayrollSummary {

    totalDays: number;
    totalHours: number;
    regularHours: number;
    overtimeHours: number;
    grossPay: number;
    tax: number;
    netPay: number;
}


const OVERTIME_MULTIPLIER = 1.25;
const TAX_RATE = 0.10;

export function calculatePayroll(

    logs: DutyLog[],
    hourlyRate: number
    ): PayrollSummary {

        const totalDays = logs.length;
        const totalHours = logs.reduce((sum, log) => sum + log.hours, 0);
        const regularHours = logs.reduce((sum, log) =>
            sum + Math.min(log.hours, 8), 0);


        const overtimeHours = logs.reduce((sum, log) =>
            sum + Math.max(log.hours - 8, 0), 0);
        const regularPay = regularHours * hourlyRate;

        const overtimePay =
        overtimeHours * hourlyRate * OVERTIME_MULTIPLIER;
        const grossPay = regularPay + overtimePay;
        const tax = grossPay * TAX_RATE;
        const netPay = grossPay - tax;



        return {

            totalDays,
            totalHours,
            regularHours,
            overtimeHours,
            grossPay,
            tax,
            netPay
        };
    }