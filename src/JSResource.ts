import { JSResourceReference } from "react-relay";

class Resource<T> implements JSResourceReference<T> {
  // @ts-expect-error
  static map: Map<string, Resource<T>> = new Map();

  _moduleId: string;
  _loader: () => Promise<T>;
  _loadingPromise: Promise<T> | null;
  _module: T | null;

  constructor(moduleId: string, loader: () => Promise<T>) {
    this._moduleId = moduleId;
    this._loader = loader;
    this._loadingPromise = null;
    this._module = null;
  }

  getModuleId(): string {
    return this._moduleId;
  }

  getModuleIfRequired(): T | null {
    return this._module;
  }

  load(): Promise<T> {
    if (!this._loadingPromise) {
      this._loadingPromise = this._loader()
        .then((module: T) => {
          this._module = module;
          return this._module;
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    }
    return this._loadingPromise;
  }
}

export default function JSResource<T>(moduleId: string, loader: () => Promise<T>): JSResourceReference<T> {
  let resource = Resource.map.get(moduleId);

  if (resource == null) {
    resource = new Resource(moduleId, loader);
    Resource.map.set(moduleId, resource);
  }

  return resource;
}
