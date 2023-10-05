<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Orderdetail;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class OrderdetailController extends Controller
{
    public function index()
    {

        $orderdetails = Orderdetail::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'orderdetails_data' => $orderdetails],

            200

        );
    }

    public function show($id)
    {

        $Orderdetail = Orderdetail::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'orderdetail_data' => $Orderdetail],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $Orderdetail = new Orderdetail();
        $Orderdetail->order_id = $request->order_id; 
        $Orderdetail->product_id = $request->product_id; 
        $Orderdetail->price = $request->price; 
        $Orderdetail->qty = $request->qty; 
        $Orderdetail->amount = $request->amount; 
        $Orderdetail->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'orderdetail_data' => $Orderdetail],
            201
        );
    }
    //Orderdetail-update
    public function update(Request $request, $id)
    {

        $Orderdetail = Orderdetail::find($id);
        $Orderdetail->order_id = $request->order_id; 
        $Orderdetail->product_id = $request->product_id; 
        $Orderdetail->price = $request->price; 
        $Orderdetail->qty = $request->qty; 
        $Orderdetail->amount = $request->amount; 
        $Orderdetail->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'orderdetail_data' => $Orderdetail],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $Orderdetail = Orderdetail::find($id);
        if ($Orderdetail == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'orderdetail_data' => null],
                404
            );
        }
        $Orderdetail->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'orderdetail_data' => $Orderdetail], 200);

    }

}
