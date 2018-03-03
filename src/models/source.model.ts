import { Injectable } from "@angular/core";
import { Mongoose, Schema } from "mongoose";

export class SourceModel {
    _id: string;
    Endpoint: string;
    Interval: number;
}
