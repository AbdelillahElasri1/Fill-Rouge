<?php

namespace App\Http\Controllers;

use App\Models\Realstate;
use Illuminate\Http\Request;

class RealstateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Realstate::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $realstate = new Realstate;
        $realstate->titre = $request->titre;
        $realstate->price = $request->price;
        $realstate->street = $request->street;
        $realstate->user_id = $request->user_id;
        
        if($request->hasFile('image')){
            $realstate['image'] = $request->file('image')->store('image', 'public');
        }
        if($request->hasFile('image1')){
            $realstate['image1'] = $request->file('image1')->store('image', 'public');
        }
        if($request->hasFile('image2')){
            $realstate['image2'] = $request->file('image2')->store('image', 'public');
        }
        if($request->hasFile('image3')){
            $realstate['image3'] = $request->file('image3')->store('image', 'public');
        }
        //$request->file('image')->store('image');
        $result = $realstate->save();
        $response = [
            
            'id' => $realstate->user_id,
            'message' => 'realstate added successfully'
        ];

        return response()->json($response, 200);
        // if ($result) {
        //     return [
        //         'message' => 'realstate is added successfully'
        //     ];
        // } else {
        //     return [
        //         'message' => 'realstate is not added'
        //     ];
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(String $id)
    {
        return Realstate::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request , string $id)
    {
        
        $realstate = Realstate::find($id);

        $realstate->titre = $request->titre;
        $realstate->price = $request->price;
        $realstate->street = $request->street;

        if($request->hasFile('image')){
            $realstate['image'] = $request->file('image')->store('image', 'public');
        }
        if($request->hasFile('image1')){
            $realstate['image1'] = $request->file('image1')->store('image', 'public');
        }
        if($request->hasFile('image2')){
            $realstate['image2'] = $request->file('image2')->store('image', 'public');
        }
        if($request->hasFile('image3')){
            $realstate['image3'] = $request->file('image3')->store('image', 'public');
        }

        $result = $realstate->update();
        

        if ($result) {
            return response($result);
        } else {
            return ['result' => 'Device not updated'];
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $realstate = Realstate::find($id);
        $result = $realstate->delete();

        if ($result) {
            return 'device has been deleted';
        } else {
            return 'device not deleted';
        }
    }
    public function search($titre){
        $data = Realstate::where('titre','like', "%". $titre . "%")->get();
        return response()->json($data);
    }
}
