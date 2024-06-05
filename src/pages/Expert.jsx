
import ExpertDetails from '../components/ExpertDetails';
import img1 from '../images/team/3.jpg'

const engineerData = [


    {
        "id": 1,
        expert: ' Engine Expert',
        name: 'Engine Repair',
        imgs: img1
    },
    {
        "id": 2,
        expert: 'Electrical Expert',
        name: 'Electrical System',
        imgs: img1
    }
    ,
    {
        "id": 3,
        expert: 'Automatic Expert',
        name: 'Automatic Services',
        imgs: img1
    }
    ,


]
const Engineer = () => {
    return (
        <div className='text-center p-5 mt-10'>

            <h1 className="text-5xl font-bold">Our Expert</h1>
            <p className="py-6">the majority have suffered alteration in some form, by injected humour,  or randomised words <br /> which dont look even slightly believable. </p>
            <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    engineerData.map(engineer => <ExpertDetails
                        key={engineer.id}
                        engineer={engineer}
                    ></ExpertDetails>)
                }

            </div>
        </div>
    );
};

export default Engineer;