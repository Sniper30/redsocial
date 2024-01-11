import MakePostComponent from '../PostComponent/MakePost';



const PostSkeleton = ()=>(
  <div className="mt-[103px] w-full h-auto min-h-screen text-gray-200 flex flex-col justify-start items-center ">
    <MakePostComponent/>
    <div className="w-7/12 h-auto mt-4">

    <div className="flex items-center justify-between p-4">
            <div data-placeholder className="mr-2 h-10 w-10 animate-pulse  rounded-full overflow-hidden relative bg-gray-300">
        
                </div>
            <div className="flex flex-col justify-between items-center animate-pulse">
            <div data-placeholder className="rounded-md mb-2 h-5 w-40 overflow-hidden relative bg-gray-300">
            
            </div>
            </div>

        </div>

        <div className="max-full h-[400px] rounded overflow-hidden shadow-lg animate-pulse">
        <div className="h-48 bg-gray-300 rounded-md"></div>
        <div className="px-6 py-4">
            <div className="h-6 bg-gray-300 mb-2 rounded-md"></div>
            <div className="h-4 bg-gray-300 w-2/3 rounded-md"></div>
        </div>
        <div className="px-6 pt-4 pb-2">
            <div className="h-4 bg-gray-300 w-1/4 mb-2 rounded-md"></div>
            <div className="h-4 bg-gray-300 w-1/2 rounded-md"></div>
        </div>
        </div>

        <div className="flex items-center justify-between p-4">
            <div data-placeholder className="mr-2 h-10 w-10 animate-pulse  rounded-full overflow-hidden relative bg-gray-300">
        
                </div>
            <div className="flex flex-col justify-between items-center animate-pulse">
            <div data-placeholder className="rounded-md mb-2 h-5 w-40 overflow-hidden relative bg-gray-300">
            
            </div>
            </div>

        </div>

        <div className="max-full h-[400px] rounded overflow-hidden shadow-lg animate-pulse">
        <div className="h-48 bg-gray-300 rounded-md"></div>
        <div className="px-6 py-4">
            <div className="h-6 bg-gray-300 mb-2 rounded-md"></div>
            <div className="h-4 bg-gray-300 w-2/3 rounded-md"></div>
        </div>
        <div className="px-6 pt-4 pb-2">
            <div className="h-4 bg-gray-300 w-1/4 mb-2 rounded-md"></div>
            <div className="h-4 bg-gray-300 w-1/2 rounded-md"></div>
        </div>
        </div>
    </div>
</div>
)

export default PostSkeleton;