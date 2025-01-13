/* eslint-disable react/prop-types */
function BoxResume({title, children}) {
    return (
        <div>
            <p className="text-green-50 font-semibold text-2xl mb-5">{title}</p>
            {children}
        </div>
    )
}

export default BoxResume
