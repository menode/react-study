import { lusitana } from "@/app/ui/fonts";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { fetchLatestInvoices, fetchCardData} from "@/app/lib/data";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import CardWrapper, { Card } from "@/app/ui/dashboard/cards";
import { Suspense } from "react";
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
    
    const latestInvoices = await fetchLatestInvoices();
    const totalInvoices = latestInvoices.length; 
    const {numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices} = await fetchCardData();
    return  <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            仪表盘
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback = {<CardSkeleton></CardSkeleton>}>
                <CardWrapper></CardWrapper>
            </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback ={<RevenueChartSkeleton></RevenueChartSkeleton>} >
                <RevenueChart />
            </Suspense>
            <Suspense fallback ={<LatestInvoicesSkeleton></LatestInvoicesSkeleton>} >
                <LatestInvoices />
            </Suspense>
           
         </div>

    </main>
}