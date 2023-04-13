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
        
        if($request->hasFile('image')){
            $realstate['image'] = $request->file('image')->store('image', 'public');
        }
        //$request->file('image')->store('image');
        $result = $realstate->save();
        return response()->json(['message' => 'realstate is added successfully']);
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
    public function show(Realstate $realstate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request , string $id)
    {
        
        $update = Realstate::findOrFail($id);
        $update->titre = $request->titre;
        $update->price = $request->price;
        $update->street = $request->street;
        if($request->hasFile('image')){
            $update['image'] = $request->file('image')->store('image', 'public');
        }
        
        $result = $update->save();
        if ($result) {
            return ['result' => 'Device updated successfully'];
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
}
