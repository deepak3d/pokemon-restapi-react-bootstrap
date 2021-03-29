import React from "react";
import { Container, Row, Card, Col, ProgressBar } from "react-bootstrap";

export default function PokemonData(props) {
  // const toUpper = (x) =>{
  //   return x.toUpperCase();
  // }
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <Container className="mt-2">
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>
              <h5>{`${props.id} ${capitalize(props.name)}`}</h5>
              <img
                className="px-3 py-2"
                src={props.sprite}
                alt={`${props.name}_front `}
              />
              <img src={props.sprite_shiny} alt={`${props.name}_shiny `} />
              <img
                className="px-3 py-2"
                src={props.sprite_back}
                alt={`${props.name}_back `}
              />
              <img
                src={props.sprite_back_shiny}
                alt={`${props.name}_back_shiny `}
              />
            </Card.Header>
            <Card.Body>
              <h5>Abilities</h5>
              {props.abilities.map((ability, key) => (
                <div key={key}>
                  {/* <span>{ability.ability.name.toUpperCase()}</span> */}
                  {/* <span>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</span> */}
                  <span>{capitalize(ability.ability.name)}</span>
                </div>
              ))}
              <h5>Types</h5>
              {props.types.map((type, key) => (
                <div key={key}>
                  {/* ({type.type.name} === {'water'} ? <Badge pill variant="primary">
                  {type.type.name}
                  </Badge> : null;) */}
                  <span>{capitalize(type.type.name)}</span>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <h4>Base Stats</h4>
              {props.stats.map((stat, key) => (
                <div key={key}>
                  <strong>{capitalize(stat.stat.name)}</strong>
                  <ProgressBar
                    variant="danger"
                    animated
                    now={stat.base_stat}
                    max={255}
                    label={stat.base_stat}
                  />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
