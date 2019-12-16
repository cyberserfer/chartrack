import React from "react";
import List from "./List";
import get from "lodash.get";

export default ({ data, template, updateFunction }) => (
  <>
    <h2>{template.title}</h2>
    {template.fields.map(field => (
      <List
        key={field.name}
        objName={field.name}
        objValue={
          data
            ? get(
                data.find(el => el.name === field.name),
                "value",
                ""
              )
            : ""
        }
        possibleValues={template.dicePool}
        funcOne={e => updateFunction(e)}
      />
    ))}
  </>
);
