export default function InnerHeader({title, ...props}: {title: string}) {
    return (
        <div className="flex flex-row gap-2 items-center py-4 -mb-4">
            <div className='w-1 h-6 bg-purple-300'></div>
            <div {...props}>
                <p className="text-gray-100 text-lg font-semibold ">{title}</p>
            </div>
        </div>
    )
}