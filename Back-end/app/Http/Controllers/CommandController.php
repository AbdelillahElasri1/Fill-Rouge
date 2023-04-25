<?php

namespace App\Http\Controllers;

use App\Models\Command;
use Illuminate\Http\Request;

class CommandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Command::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $command = new Command;
        $command->user_id = $request->user_id;
        $command->realstate_id = $request->realstate_id;
        $command->email = $request->email;
        $command->firstname = $request->firstname;
        $command->save();
        return response()->json([
            'message' => 'command added successfully',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Command $command)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Command $command)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Command $command)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        $command = Command::find($id);
        $result = $command->delete();

        if ($result) {
            return 'command has been deleted';
        } else {
            return 'command not deleted';
        }
    }
}
