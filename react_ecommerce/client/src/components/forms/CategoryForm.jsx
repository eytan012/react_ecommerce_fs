import React from 'react'
import { Button } from 'antd'

const CategoryForm = ({name,handleSubmit,setName}) => {
    return (
        <>
		<div className="form-group">
			<label htmlFor="name">Name</label>
			<input
				type="text"
				className="form-control"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<Button
				disabled={name.length <= 3}
				type="primary"
				className="mt-3"
				onClick={handleSubmit}
			>
				Save
			</Button>
		</div>
        </>
    )
}

export default CategoryForm
